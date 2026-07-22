# Build: a sub-2s blob hot-reload loop for {{PROJECT_NAME}}

> Operator manual for an autonomous Claude Code session. Launch a `claude`
> session **from the target Zephyr project's repo root** (not this blog repo)
> and feed it this prompt, filled in. Read `docs/zephyr-blob-hotreload/GUIDE.md`
> in the *fcarraustewart.github.io* repo first (copy its contents in, or
> paste them inline below) — it has the generalized mechanic and the
> non-negotiable gotchas; this file is the operator script that applies it.

Fill in before sending:

- `{{PROJECT_NAME}}` — the Zephyr project this targets
- `{{BOARD}}` — board/SoC target(s), e.g. `esp32c3_devkitm` or `nrf5340dk/nrf5340/cpuapp`
- `{{ARCH_ENTRY_BIT}}` — architecture-specific entry-call convention (e.g.
  `| 1` for the ARM Thumb bit; RISC-V typically needs no bit set — confirm
  for the target arch, don't assume ARM)
- `{{TRANSPORT}}` — how bytes reach the device: shell-over-serial/RTT, BLE
  characteristic, or something else already in this project
- `{{SLOT_SIZE}}` / `{{SLOT_COUNT}}` — how much RAM to reserve and how many
  independent blobs to support concurrently
- `{{SIGNING}}` — yes/no. Yes if the device will ever run away from your desk
  or be handled by anyone else; no for a strictly personal dev rig (skip the
  signing step entirely rather than half-implementing it)

---

You are an autonomous Claude Code session working in `{{PROJECT_NAME}}`'s
repo. Build a hot-reload loop that lets small native-C modules ("blobs") be
edited and running on `{{BOARD}}` in under ~2 seconds, without a full
`west build && west flash` + reboot cycle.

## STEP 0 — Orient before touching anything

1. Confirm the board/arch specifics that change the generic mechanic:
   entry-call convention (`{{ARCH_ENTRY_BIT}}`), whether an MPU/PMP is on by
   default for this board's default config (it needs to be off, or the
   slot region needs to be marked executable-from-RAM), and how much free
   RAM headroom exists for `{{SLOT_COUNT}} × {{SLOT_SIZE}}`.
2. Confirm `{{TRANSPORT}}` already exists and is byte-reliable in this
   project (a debug shell, BLE service, etc.) — build this loop on top of an
   existing transport, don't invent a new one just for this.
3. Work on a branch. Don't touch this project's release/production build
   config to accommodate a dev-only trick — keep the MPU-off / blob-host
   config behind a build variant or Kconfig option that's off by default.

## Architecture to build

1. **Linker reservation**: `{{SLOT_COUNT}}` slots of `{{SLOT_SIZE}}` bytes
   each, at fixed addresses, via linker symbols. Nothing else placed there.
2. **ABI header** (`blob_api.h` or similar): a host-owned struct of function
   pointers the blob receives at init, and a blob-owned struct of callbacks
   the host receives back. Version the blob-owned struct explicitly — see
   `GUIDE.md`'s ABI-versioning gotcha before writing this.
3. **Blob build script**: `gcc -c` → `ld -Ttext=<slot address>` (custom
   linker script ordering `.entry/.text/.rodata/.data/.bss`) → `objcopy
   --only-section=.app` → flat binary. Must read the slot address *and* size
   from the currently-built host ELF (e.g. `nm -S`), never from a hardcoded
   constant that can drift from the actual flashed image.
4. **Host loader**: `memcpy` into the slot, call `(entry {{ARCH_ENTRY_BIT}})`
   with the API pointer. Must refuse to load if slot geometry doesn't match
   what the blob was built against.
5. **{{SIGNING}}** — if yes: ECDSA-sign the blob container, verify before
   `init()`, document plainly (in this project's own docs) that this
   authenticates the author, not runtime safety.
6. **Watch-loop script**: file-watch → rebuild (relinked against the
   currently-flashed ELF) → (sign) → push over `{{TRANSPORT}}` → wait for an
   explicit load ack → print per-stage timing (build/sign/transfer/load).

## Verification (Definition of Done)

- [ ] A trivial blob (e.g. a blinking/toggling one) builds without hardware
      attached — pure host-side build sanity.
- [ ] On-target: push the trivial blob, confirm it runs (whatever the
      project's existing observability is — log line, GPIO toggle, etc.).
- [ ] Edit the blob source, re-push via the watch loop, confirm the change is
      live without a reflash. **Report the measured end-to-end time** for
      this cycle — that number is the point of the exercise.
- [ ] Deliberately break the ABI-version check (or build against a stale
      ELF) and confirm the host refuses the load with a clear error, rather
      than silently corrupting state.
- [ ] If `{{SIGNING}} == yes`: confirm an unsigned/tampered blob is rejected,
      and a validly signed one loads.
- [ ] Document, in this project's own README/CLAUDE.md, the same "honest
      limits" register as `GUIDE.md`: no memory isolation, dev-only, not an
      OTA mechanism.

## Don't

- Don't turn this on for a release/production build config.
- Don't cache a blob build artifact across host rebuilds — always relink
  against the ELF that is actually flashed.
- Don't treat a signature (if present) as a safety guarantee — it is an
  authentication guarantee only.
- Don't widen the fault-containment story beyond "one blob slot" without a
  real hardware isolation mechanism (MPU/PMP/SPU region per slot) backing it.

Start by reading `docs/zephyr-blob-hotreload/GUIDE.md`'s mechanic and gotchas
sections, then propose a short build plan (files + verification steps) before
writing code.
