# Zephyr "blob" hot-reload — a generic dev-loop trick, generalized

Reference doc for reapplying a technique that made agentic (Claude Code)
firmware iteration on real Zephyr hardware tractable: cutting the
edit→observe cycle from a full `west build && west flash` + reboot (tens of
seconds) down to under two seconds, by pushing small position-fixed native
code blobs into RAM instead of reflashing. Concretely proven on an ESP32-C3
and an nRF5340 DK building a custom logic analyzer (a separate, non-public
project) — **0.8–0.9 s per push unsigned, 1.8–2.1 s signed**, end to end
including build, transfer, and load.

This guide is deliberately generic — no project-specific code is copied in
here. Use `PROMPT_TEMPLATE.md` in this folder to hand the bootstrap job to a
fresh Claude Code session working in whatever Zephyr repo needs this next.

## Why this exists

An LLM pairing partner is only as fast as the loop it's iterating inside. A
normal Zephyr dev loop — edit, `west build`, `west flash`, wait for reboot,
read the log — is 10-30+ seconds per change, most of it link/flash/boot
overhead unrelated to the one function you actually changed. That overhead
compounds badly across dozens of agent-driven edits in a session. The fix
below **is not a general firmware technique** — it is a deliberate,
documented trade of safety for iteration speed, scoped to development only.
Say that out loud before applying it: this is not how you'd ship an OTA
update mechanism.

## The mechanic

1. **Reserve fixed-address RAM slots at link time.** Pick N small regions
   (e.g. 4 × 4 KB) in RAM via linker symbols (`blob_slot0`, `blob_slot1`, …).
   Nothing else is placed there; the host image treats them as opaque
   scratch space it can overwrite and jump into.
2. **A blob is a flat binary, not an ELF.** Build it as its own tiny
   translation unit, linked to run at exactly one slot's address:
   `gcc -c` → `ld -Ttext=<slot address>` (a custom linker script pins
   `.entry`/`.text`/`.rodata`/`.data`/`.bss` in that order) → `objcopy
   --only-section=.app` to strip everything down to a flat image. Result: no
   relocations, no imports, no dynamic symbol resolution — every address in
   the blob is already correct because it was linked to live at that exact
   spot.
3. **The load-time seam is a passed pointer, not a linked symbol.** The host
   defines a `struct blob_api` (function pointers into host code: print,
   timing, whatever peripherals the host owns) and calls the blob's `.entry`
   as `init(&HOST_API)`. The blob stores that pointer and hands back its own
   `struct blob_iface` (its `tick()`/callback table). Neither side resolves
   the other's symbols by name — it's one pointer exchanged at the moment of
   load, which is exactly why no linker step is needed on the *host* side
   per push, only on the blob.
4. **The host copies bytes into the slot and calls `(entry | 1)()`** — the
   `| 1` sets the Thumb bit on ARM Cortex-M; adjust per architecture. That's
   the entire "flash" step: a `memcpy` and a branch, not a bootloader
   handoff.
5. **A push transport carries the bytes to the device.** Whatever the
   project already has is fine — a debug shell over RTT/serial, a BLE
   characteristic, anything byte-reliable. The interesting design point isn't
   the transport, it's that the transport only ever needs to move a few
   hundred bytes to a few KB per push, which is why this is fast regardless
   of which transport is chosen.
6. **Signing is optional and orthogonal.** If the device ever leaves your
   desk, ECDSA-sign the blob container and verify before `init()` — but be
   honest that this authenticates the *author*, not the *safety* of the
   code. A signed-but-buggy blob can still corrupt host state or hang, because
   step 7 requires no memory isolation.

## Non-negotiable gotchas (found the hard way, do not skip these)

- **The MPU (or equivalent) must be off**, or configured to allow execution
  from the blob's RAM region. With protection on, jumping into a RAM slot
  faults immediately (e.g. `Instruction Access Violation`). This is the load
  bearing part of the "abuse" — you are deliberately running code from a
  region the CPU would normally forbid, so this only belongs in a dev build.
- **Blobs are position-fixed to exactly one host image.** Any host rebuild —
  even an unrelated Kconfig change — can move the slot's address in the new
  ELF. A blob built against a stale ELF will either fail an ABI/identity
  check or, worse, silently jump into the wrong place. **Always relink the
  blob against the ELF that is actually flashed right now**, every push, no
  exceptions, no caching a build artifact "because nothing changed."
- **Version the host↔blob ABI directionally, not as one number.** Appending
  fields to the *host-owned* struct (the one living in host RAM, that the
  blob only reads through a pointer) is safe — the host controls that
  memory's layout. Appending fields to the *blob-owned* struct (the one
  living in blob RAM, sized by whatever header the blob happened to compile
  against) is **not** safe — a newer host reading a new field off an older
  blob's struct is reading adjacent blob code/data as if it were a function
  pointer. Bump a version constant when the blob-owned shape changes, and
  make the host refuse to load a blob that doesn't match, rather than
  guessing.
- **No memory isolation exists.** A wild write from inside a blob can corrupt
  host state with nothing stopping it. Design your containment story before
  you need it: at minimum, catch a fault whose PC lies inside a slot and
  restart *only* whatever subsystem drives that slot, instead of taking the
  whole system down on every bad edit. Faults from any other context still
  crash normally — don't try to make the failure domain bigger than "one
  blob slot" without new hardware guarantees (an MPU/SPU region per slot is
  the natural next step if this trick outlives its dev-only original scope).

## The watch-loop shape

The point of this mechanic is a script, not a manual sequence. Structure it
as:

```
watch <blob source file>
  on change:
    rebuild   → relink against the currently-flashed host ELF (not a cached one)
    [sign]    → only if the project signs blobs
    push      → send over the transport, wait for an explicit load ack
    report    → per-stage timing (build / sign / transfer / load), so a slow
                push is diagnosable instead of a silent stall
```

Reporting per-stage timing matters more than it looks: when this loop is the
thing an agent is iterating inside, a silent 5-second stall reads as "is it
hung?" — a broken-out timing line turns that into "the load stage is slow
today, why?"

## Honest limits

This is a **development-loop trade**, not a production update mechanism:

- No memory isolation between host and blob (see above) — this alone rules
  out shipping it as-is to end users.
- Signing (if present) authenticates *who wrote the blob*, not that the
  blob is safe to run — don't conflate the two in documentation or in your
  own head.
- Any rollback/versioning story needs to be *enforced*, not just recorded,
  before this could be considered for anything beyond a personal dev rig.

Say all of this explicitly in whatever you build next with this technique —
the speed win is real and worth having, but only if everyone touching the
project knows exactly what was traded to get it.

## See `PROMPT_TEMPLATE.md`

That file is the copy-pasteable operator prompt for bootstrapping this in a
new Zephyr repo with a fresh Claude Code session.
