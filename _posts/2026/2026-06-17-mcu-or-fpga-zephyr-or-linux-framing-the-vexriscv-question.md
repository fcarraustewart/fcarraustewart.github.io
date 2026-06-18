---
title: 'MCU or FPGA, Zephyr or Linux: framing the VexRiscv question'
date: '2026-06-17 00:00:00 +0000'
categories:
- Firmware
tags:
- RISC-V
- FPGA
- LiteX
- VexRiscv
- Zephyr
- Embedded Linux
description: First project of the GraphicsCourse — what linux-on-litex-vexriscv and
  AkiraOS actually teach about connecting (or collapsing) the MCU and FPGA worlds.
obsidian_source: MCU-FPGA — Zephyr or Linux.md
---

I started this project meaning to investigate "the MCU–FPGA connection" through
two repos. The first surprise: **neither repo is about wiring an MCU to an
FPGA.** They are the two ends of a different axis — *Zephyr RTOS vs embedded
Linux* — and seeing that is what makes the project worth writing about.

## The two repos, honestly

[`linux-on-litex-vexriscv`](https://github.com/litex-hub/linux-on-litex-vexriscv)
runs full **Linux** on **VexRiscv-SMP**, a 32-bit RISC-V *soft core* synthesised
*into* the FPGA. [LiteX](https://github.com/enjoy-digital/litex) assembles the
SoC and the peripherals (DRAM, Ethernet, SD); OpenSBI and Buildroot do the rest.
There is no separate microcontroller here — the CPU *is* the fabric.

[`AkiraOS`](https://github.com/ArturR0k3r/AkiraOS) is the opposite world:
**Zephyr 4.3** on ordinary MCUs (ESP32-S3, nRF54L15, STM32), running sandboxed
WebAssembly apps over a stable firmware base. No FPGA in sight.

## The reframe

The two questions I'd been conflating are independent:

- **MCU vs FPGA** — is the CPU hard silicon, or soft logic in an FPGA?
- **Zephyr vs Linux** — a small real-time RTOS, or a full MMU OS?

They decouple because Zephyr ships an official
[`litex_vexriscv`](https://docs.zephyrproject.org/latest/boards/enjoydigital/litex_vexriscv/doc/index.html)
board: the *same* VexRiscv soft core boots **either** Linux **or** Zephyr.
Antmicro even ran [TF Lite Micro on Zephyr/LiteX/VexRiscv](https://antmicro.com/blog/2019/12/tflite-in-zephyr-on-litex-vexriscv).

So there are three architectures to actually compare — soft-core Linux,
soft-core Zephyr, and a true hybrid where a real MCU (AkiraOS-style) drives a
LiteX FPGA over SPI/Wishbone/PCIe. The last one is the literal "MCU–FPGA
connection," and it's the one neither repo hands you.

*(Draft — see README.md in this folder for the comparison table, the open
questions, and where the GraphicsCourse video angle plugs in.)*
