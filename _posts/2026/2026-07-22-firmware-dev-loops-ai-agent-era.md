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

<style>
  .akira-frame { width: 100%; max-width: 600px; height: 1240px; border: 0; border-radius: 10px; display: block; margin: 1rem auto; background: #14161c; }
  @media (max-width: 640px) { .akira-frame { height: 1800px; } }
</style>
<iframe src="/assets/widgets/akira-la-timeline.html"
        title="Firmware dev loops compared, and a schematic of the decoded-event stream"
        loading="lazy"
        class="akira-frame">
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
  .zrc-card {
    max-width: 600px; margin: 1rem auto;
    background: linear-gradient(160deg, #20242f 0%, #1b1e26 55%, #171a22 100%);
    border: 1px solid #2c3040; border-radius: 12px;
    padding: 18px 20px 16px; position: relative; overflow: hidden;
    font-size: 0.8125rem; line-height: 1.5; color: #e6e8ee;
  }
  .zrc-card::before {
    content: ""; position: absolute; inset: 0 0 auto 0; height: 2px;
    background: linear-gradient(90deg, #6fb3ff, #4f9d6e 60%, transparent);
    opacity: .7;
  }
  .zrc-head { display: flex; align-items: center; gap: 12px; }
  .zrc-head svg { flex: none; width: 34px; height: 34px; fill: #e6e8ee; opacity: .95; }
  .zrc-owner { font-size: 0.72rem; color: #8b93a7; letter-spacing: .02em; }
  .zrc-card a.zrc-repo {
    font-size: 1.06rem; font-weight: 700; color: #6fb3ff; text-decoration: none;
    font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
    border-bottom: none;
  }
  .zrc-card a.zrc-repo:hover { text-decoration: underline; color: #9cc9ff; }
  .zrc-desc { margin: 12px 0 0; color: #e6e8ee; }
  .zrc-desc strong { color: #6fb3ff; font-weight: 600; }
  .zrc-chips { display: flex; flex-wrap: wrap; gap: 7px; margin: 12px 0 0; }
  .zrc-chip {
    font-size: 0.69rem; color: #8b93a7; border: 1px solid #2c3040; border-radius: 6px;
    background: rgba(255,255,255,0.03); padding: 4px 8px; white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  .zrc-chip b { color: #e6e8ee; font-weight: 600; }
  .zrc-chip.zrc-hot b { color: #5fbe87; }
  .zrc-langbar {
    display: flex; height: 7px; border-radius: 4px; overflow: hidden;
    margin: 14px 0 7px; background: #2c3040;
  }
  .zrc-langbar span { height: 100%; }
  .zrc-langs { display: flex; flex-wrap: wrap; gap: 12px; font-size: 0.69rem; color: #8b93a7; }
  .zrc-langs span { display: inline-flex; align-items: center; gap: 5px; }
  .zrc-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .zrc-cta {
    margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px;
    align-items: center; justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px;
  }
  .zrc-card a.zrc-go {
    display: inline-flex; align-items: center; gap: 7px; white-space: nowrap;
    font-size: 0.78rem; font-weight: 600; color: #14161c !important;
    background: #6fb3ff; border-radius: 8px; padding: 7px 14px;
    text-decoration: none; border-bottom: none; transition: filter .15s ease;
  }
  .zrc-card a.zrc-go:hover { filter: brightness(1.12); text-decoration: none; }
  .zrc-go svg { width: 14px; height: 14px; fill: currentColor; }
  .zrc-lic { font-size: 0.69rem; color: #8b93a7; }
  @media (max-width: 420px) {
    .zrc-card { padding: 15px 15px 13px; }
    .zrc-card a.zrc-repo { font-size: 0.94rem; }
  }
</style>
<div class="zrc-card">
  <div class="zrc-head">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    <div>
      <div class="zrc-owner">fcarraustewart /</div>
      <a class="zrc-repo" href="https://github.com/fcarraustewart/zephyr-hot-reload" target="_blank" rel="noopener">zephyr-hot-reload</a>
    </div>
  </div>
  <p class="zrc-desc">The code behind this post: <strong>sub-2-second hot reload for Zephyr firmware</strong> — native-C blobs compiled standalone, pushed over BLE into a fixed RAM slot on a live nRF5340 / ESP32-C3, no reflash, no reboot.</p>
  <div class="zrc-chips">
    <span class="zrc-chip zrc-hot"><b>0.8–0.9 s</b> unsigned push</span>
    <span class="zrc-chip zrc-hot"><b>1.8–2.1 s</b> ECDSA-signed</span>
    <span class="zrc-chip"><b>65–70 kB/s</b> BLE event stream</span>
    <span class="zrc-chip"><b>nRF5340</b> · <b>ESP32-C3</b></span>
  </div>
  <div class="zrc-langbar" aria-hidden="true">
    <span style="width:57.8%; background:#3572A5;"></span>
    <span style="width:34.7%; background:#9aa4b8;"></span>
    <span style="width:6.9%;  background:#89e051;"></span>
    <span style="width:0.6%;  background:#d98e3a;"></span>
  </div>
  <div class="zrc-langs">
    <span><i class="zrc-dot" style="background:#3572A5;"></i>Python 57.8%</span>
    <span><i class="zrc-dot" style="background:#9aa4b8;"></i>C 34.7%</span>
    <span><i class="zrc-dot" style="background:#89e051;"></i>Shell 6.9%</span>
    <span><i class="zrc-dot" style="background:#d98e3a;"></i>CMake</span>
  </div>
  <div class="zrc-cta">
    <a class="zrc-go" href="https://github.com/fcarraustewart/zephyr-hot-reload" target="_blank" rel="noopener">View on GitHub
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06z"/></svg></a>
    <span class="zrc-lic">loader · blob toolchain · decoders</span>
  </div>
</div>
