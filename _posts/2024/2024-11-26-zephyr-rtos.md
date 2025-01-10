---
title: "esp32 Zephyr RTOS"
date: 2024-11-26 08:00:00 - 0000
categories: [Firmware]
tags: [C, C++, Zephyr]
image:
    path: /assets/img/headers/zephyresp32.webp
    lqip: data:image/webp;base64,UklGRvgAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSG0AAAABcCIAgJrcXL+w5PqB/QCLdOIu8hatq2Si6zMcJg1v7vqAiJgA8K956a4sMs9ko8D3fT+Yxp4pnR5mHlC25r2SKlUCf/lK7vT8vdjuHcLgHWT5HSC92L+EANYpVBudvudCCF355pbmWI4nwf8GAFZQOCBkAAAAsAMAnQEqFAAUAD85jMFXLykno6gKqeAnCWcAAC51y355xXi6NwAA/c0FbWxXZRfsBR5uLtP/7mrBt+90OpZuIFSKRLh+yfNiUS74BeXco3TBMrcZAdoBnGMz+Iw/wJNn+LxAAA==
pin: false
description: esp32 tests with zephyr RTOS and C++17.
---

# Zephyr and ESP32: Description

Personal project Jan 2024 - Present, where I try to setup a zero runtime overhead C++ system firmware on an esp32, resolving most of the firmware architecture calls at compile time. Avoiding virtual functions and heap usage; though these add minor runtime overhead, they’re often unnecessary in well-designed application firmware and can be avoided with careful planning.

The goal is to establish a multithreaded environment with a very expressive and modularized message passing interface as IPC (inter-processes communication) using C++ templates and useful design patterns; define an abstraction layer that makes it RTOS-agnostic, resulting in understandable, maintainable, and scalable code.

The hardware used is a CodeCell from [microbots.io](https://microbots.io/products/codecell?variant=50037783724365), with an ESP32C3 and peripherals: 
- environmental proximity/light sensor, 
- an IMU BNO085, 
- and an addressable LED with RGB values.

--------

<sub><sup>Overall Architecture:</sup></sub>

- <sub><sup>Static Polymorphism: Use CRTP (Curiously Recurring Template Pattern) to replace runtime polymorphism with compile-time polymorphism, avoiding virtual functions.</sup></sub>
- <sub><sup>Compile-Time Configuration: Use template metaprogramming and constexpr to ensure that as much of the code is resolved at compile time as possible.</sup></sub>
- <sub><sup>Layered Design: Define abstraction layers, so the low-level RTOS-specific code is separated from the higher-level logic. This separation will help with portability and maintainability.</sup></sub>

 <sub><sup>Multithreading and Synchronization:</sup></sub>

- <sub><sup>Compile-Time Safe Queues: Use constexpr and template metaprogramming to define thread-safe, lock-free data structures.</sup></sub>
- <sub><sup>Event Loop with Message Passing: Set up an event loop where each thread can receive messages via a non-blocking queue. </sup></sub>
- <sub><sup>Template Metaprogramming for compile-time decision-making and policy-based design. </sup></sub>
- <sub><sup>Singleton for single-instance resources, like a logger, ensuring no heap allocation is used.</sup></sub>
- <sub><sup>Policy-based Design: Using policies allows customization of thread, queue, and mutex behavior at compile time.</sup></sub>
- <sub><sup>Event-Driven Architecture: Implementing a lightweight event-driven system using templates to create specialized events for each module.</sup></sub>

 <sub><sup>Modularization or encapsulation:</sup></sub>

- <sub><sup>Eliminate dependencies between modules.</sup></sub>


 <sub><sup>DSP:</sup></sub>

- <sub><sup> Include Edge Impulse SDK for digital signal processing functions ranging from traditional DSP to ML tensorflow models and matrix transforms types and structures.</sup></sub>
  
 <sub><sup>Services Running on receiveing messages:</sup></sub>

- <sub><sup> Services run an ActiveObject pattern which responds to a message queue, implemented in Queue FreeRTOS or k_msgq Zephyr RTOS.</sup></sub>
  
- <sub><sup> One of the faced challenges implies making a service run something that "blocks". </sup></sub>
    - <sub><sup> Solution: add a background work-queue to each service that requires this feature, for example: playing a song on a buzzer, using PWM, requires to spend some human-time (>400ms) playing each note to compose a hearable song,</sup></sub>  
    - <sub><sup> We could queue that blocking work to a background thread to avoid blocking the service loop and remain responsive to new events while playing the song at the same time.</sup></sub>
    - <sub><sup> This brings back the time I had to run a flash/nvm storing service. It was kind of a pain because all flash operations are blocking and lagged the entire system. It is important to not lose sight of incoming work while processing each message. So this makes me recall [this](https://github.com/arduino/ArduinoCore-zephyr/blob/arduino/libraries/Wire/Wire.cpp) Wire implementation in Zephyr that uses a ringbuffer queue in order to achieve i2c's bus time-slicing transactions to multiple i2c slaves.   </sup></sub>

> Felipe Carrau Stewart. [Link: GitHub to this Firmware repo](https://github.com/fcarraustewart/esp32-cpp-fw/tree/master/zephyr-task-templates/)[info](https://fcarraustewart.github.io/about).
{: .prompt-tip }

