---
title: "Posting About stuff"
date: 2024-11-26 08:00:00 - 0000
categories: [Firmware]
tags: [C, C++]
image:
    path: /assets/img/headers/zephyresp32.webp
pin: false
---

# Zephyr ESP32
## Check the about tab
[Link.](https://fcarraustewart.github.io/about)

```
void main()
{
    return;
}
```
## Linkedin Post:
Open-source esp32 cpp-fw zephyr/freertos tests

- Jan 2024 - Present
  
Personal project where I try to setup a zero runtime overhead C++ system firmware on an esp32, resolving most of the firmware architecture at compile time. Avoid virtual functions and heap usage; though these add minor runtime overhead, they’re often unnecessary in well-designed application firmware and can be avoided with careful planning.

The goal is to establish a multithreaded environment with a very expressive and modularized message passing interface as IPC (inter-processes communication) using C++ templates and useful design patterns; define an abstraction layer that makes it RTOS-agnostic, resulting in understandable, maintainable, and scalable code.

Overall Architecture:

- Static Polymorphism: Use CRTP (Curiously Recurring Template Pattern) to replace runtime polymorphism with compile-time polymorphism, avoiding virtual functions.
- Compile-Time Configuration: Use template metaprogramming and constexpr to ensure that as much of the code is resolved at compile time as possible.
- Layered Design: Define abstraction layers, so the low-level RTOS-specific code is separated from the higher-level logic. This separation will help with portability and maintainability.

 Multithreading and Synchronization:

- Compile-Time Safe Queues: Use constexpr and template metaprogramming to define thread-safe, lock-free data structures.
- Event Loop with Message Passing: Set up an event loop where each thread can receive messages via a non-blocking queue. 
- Template Metaprogramming for compile-time decision-making and policy-based design. 
- Singleton for single-instance resources, like a logger, ensuring no heap allocation is used.
- Policy-based Design: Using policies allows customization of thread, queue, and mutex behavior at compile time.
- Event-Driven Architecture: Implementing a lightweight event-driven system using templates to create specialized events for each module.

> Felipe Carrau Stewart. [info](https://fcarraustewart.github.io/about).
{: .prompt-tip }

