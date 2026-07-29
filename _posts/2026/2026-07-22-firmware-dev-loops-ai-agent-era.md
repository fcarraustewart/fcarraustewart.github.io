---
title: 'Firmware Dev Cycle, Stop waiting.'
date: '2026-07-22 00:00:00 +0000'
categories:
- Firmware
tags:
- Zephyr
- BLE
- ESP32-C3
- nRF5340
- Godot
- Claude Code
- Logic Analyzer
description: How a Godot GDScript habit turned into a sub-2-second Zephyr hot-reload
  trick — trading an MPU for iteration speed so an AI coding agent can actually pair
  on real firmware.
image:
    path: /assets/img/headers/firmware-dev-loops-ai-agent-era.webp
    lqip: data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAABwAwCdASoUAAsAPxFysFAsJqSisAgBgCIJZwAAUVNUKtl8EAAA/ujw64uSJpMiLo41bzLPoGR08PXS3FOXi2HYt4CAAA==
pin: false
---

I've spent a lot of hours in Godot outside of work — genuinely a lot, not a
weekend dabble — and the thing that hooked me wasn't the engine, it was the
loop. Edit a `.gd` script, hit save, and the change is just *there*, live, in
the running scene, no restart. I loved it enough that it planted an annoying
question: why does firmware feel nothing like this? A Zephyr `west build &&
west flash` cycle is a coffee-break by comparison — tens of seconds to
minutes for a change that, in Godot, is invisible because it's instant. So I
went and built the firmware equivalent, on real hardware (an ESP32-C3 and an
nRF5340 DK), and it's the reason an AI coding agent could actually pair with
me on this project instead of babysitting a rebuild.

## The trade: MPU off, in exchange for speed

The trick, honestly stated, is an abuse of the hardware, not a clever
optimization of the normal flow. Instead of relinking and reflashing the
whole firmware image every time one small piece of logic changes, small
native-C modules — I call them **blobs** — get compiled standalone, linked to
run at one *fixed* address in RAM, and pushed onto the running device over
BLE. No bootloader handoff, no image swap, no reboot: the host just
`memcpy`s the bytes into that RAM slot and jumps into it. That's only
possible because the MPU is deliberately left off for this build — with
memory protection on, jumping into a RAM address the CPU doesn't expect
executable code at faults immediately. Turning that protection off is the
whole point and the whole risk, and it only belongs in a dev build. This is
not a technique I'd ship to a customer.

**Measured, end to end, edit to running-live-on-device: 0.8–0.9 s unsigned,
1.8–2.1 s signed** (the signed path spends most of that on-device doing
ECDSA-P256 verification before it'll run the blob at all). That's the number
that made the whole thing worth building — it's the same order of magnitude
as the Godot loop that started this.

<iframe src="/assets/widgets/akira-la-timeline.html"
        title="Firmware dev loops compared, and a schematic of the decoded-event stream"
        loading="lazy"
        style="width:100%; max-width:600px; height:1000px; border:0; border-radius:10px; display:block; margin:1rem auto; background:#14161c;">
</iframe>

A few things make it survivable as a *habit* rather than a novelty:

- **Blobs are position-fixed to whatever image is currently flashed.** Any
  host rebuild can move the RAM slot's address, so the loader always relinks
  against the ELF that's actually on the device right now — never a cached
  build artifact. Skipping that check is how you get a jump into garbage.
- **The host/blob interface is versioned directionally.** The struct the
  *host* owns can safely grow (host controls that memory); the struct the
  *blob* owns can't be appended to without a version bump, because a newer
  host reading a new field off an older blob's struct is reading blob
  code/data as if it were a function pointer. Get this backwards once and
  you'll believe you have a heisenbug for a week.
- **A fault gets contained to one slot, not the whole board.** If a bad edit
  crashes inside a blob's own execution context, only that slot's task
  restarts — the rest of the system, including the BLE link the crash report
  comes back over, keeps running. That's what makes "just try it and see" a
  reasonable way to iterate instead of a 50/50 bet on a J-Link trip.

## What it's actually for: a logic analyzer

The excuse to build all this was a Saleae-style I2C/SPI logic analyzer,
because it's a nice adversarial target for a fast-iteration loop — you're
constantly tweaking trigger conditions and decode logic against real bus
traffic. The capture engine (edge-timestamped sampling, hardware-timed via
GPIOTE+DPPI+TIMER on the nRF53) is the one piece that stays flashed; every
**decoder** — the thing that turns raw edges into "this was an I2C START,
this was a STOP" — is a hot-reloadable blob. Change a trigger condition,
push it, watch real bus traffic hit the new logic in under two seconds,
repeat. That loop is also why a coding agent could pair on this at all:
an agent proposing a dozen small logic tweaks in a session is only as fast
as the slowest step in its own feedback loop, and a sub-2-second one keeps
"try it" cheaper than "reason about it first."

Decoded events stream off the device over their own dedicated BLE
characteristic — deliberately *not* the text shell channel, because a shell
rewrites `\n` to `\r\n` and mangles arbitrary binary. On the ESP32-C3 that
stream sustains **65–70 kB/s** (roughly 1,600–1,700 records/s) with bursts up
to 132 kB/s and zero record loss across a 6,000-record test — good enough
throughput that the bottleneck in practice is the decoder logic, not the
transport.

## The loop, and a schematic of the event stream
The point is the order of magnitude. Firmware has
historically been the slow outlier by a factor of 20–100×, not because the
problem is harder, but because nobody bothered to build the equivalent of
what Godot and a JS dev server already do by default. Closing that gap is
what actually made an agentic session on real hardware feel normal instead
of painful.

## Honorable mention: Zephyr's llext

Credit where it's due: this didn't start from a blank page. Zephyr ships
[llext](https://docs.zephyrproject.org/latest/services/llext/index.html)
(Linkable Loadable Extensions) — the in-tree, *supported* way to load
compiled code into a running image, with real ELF relocation, symbol
linking, and an extension developer kit. Reading llext is what convinced me
a live-patchable firmware loop was worth chasing at all, and if you're on a
current Zephyr and want something you could defend in a design review, it's
the thing to reach for — not this.

So why build a cruder version from the ground up? Because llext couldn't
cover this project's ground when I needed it to:

- **RISC-V came late.** The ESP32-C3 is RISC-V, and llext's RISC-V
  relocations only [landed in Zephyr 4.0](https://github.com/zephyrproject-rtos/zephyr/commits/main/arch/riscv/core/elf.c)
  (merged October 2024) — and even then with caveats like no extension
  calls from user threads. For most of llext's life it was ARM/Xtensa/x86
  territory. It does support RISC-V today; it didn't when it mattered here.
- **Older Zephyr gets nothing.** llext only exists from Zephyr 3.5 onward
  (late 2023, experimental at first). A codebase pinned to anything earlier
  — which describes a lot of shipping firmware — can't just turn it on.
- **Bare-metal gets nothing, ever.** llext is a Zephyr subsystem, full
  stop. The blob trick — fixed RAM address, `memcpy`, jump — asks nothing
  of the OS, which means it ports to the bare-metal projects I have queued
  up next. That portability was a hard requirement; an RTOS-bound loader,
  however much better engineered, wasn't.

There's also a speed angle baked into the crudeness: a position-fixed blob
has no ELF to parse and no relocations to apply on-device — the load step
is a copy and a jump, which is part of how the loop stays under a second.
llext pays for its generality at exactly that step. Right tool, different
trade.

## Where it honestly stands (not for production, but for in-house development)
 It's a
development-loop trade, full stop — a wild write from a buggy blob can still
corrupt host state, signing (where it's used) authenticates *who wrote the
blob*, not that the code is safe, and rollback is recorded but not enforced.
None of that matters for a dev rig on my desk; all of it would matter
enormously anywhere else.

What I keep coming back to, though, is the Godot thread through this. I
didn't set out to build a "hot-reload framework" — I set out to keep playing
in an engine that respected my time, then got annoyed that firmware didn't,
and built the thing that made it stop being annoying. That's a fine reason
to build something.

## The code is public

Everything described above — the blob loader, the host-side build/sign/push
toolchain, and the hot-reloadable decoders — is now on GitHub. Clone it, wire
up a dev kit, and the sub-2-second loop is yours to break:

<style>
  .repo-card-frame { width: 100%; max-width: 600px; height: 400px; border: 0; display: block; margin: 1rem auto; }
  @media (max-width: 600px) { .repo-card-frame { height: 500px; } }
</style>
<iframe src="/assets/widgets/zephyr-hot-reload-repo-card.html"
        title="zephyr-hot-reload on GitHub"
        loading="lazy"
        class="repo-card-frame">
</iframe>
