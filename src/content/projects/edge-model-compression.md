---
title: 'Edge Deployment Model Compression Benchmark'
description: 'Empirical deep learning optimization benchmark evaluating ResNet-18 on CIFAR-100 across structured pruning, INT8 quantization, and knowledge distillation.'
category: 'AI / Deep Learning'
problem: 'State-of-the-art vision models require hundreds of megabytes of memory and heavy compute budgets, preventing smooth real-time execution on resource-constrained edge and IoT hardware.'
features:
  - 'Systematic benchmark evaluating ResNet-18 trained on the CIFAR-100 image dataset'
  - 'L1-norm unstructured pruning and structured filter/channel pruning'
  - 'Post-Training INT8 Quantization (PTQ) and Quantization-Aware Training (QAT)'
  - 'Knowledge distillation transferring dark knowledge from ResNet-50 teacher to student'
  - 'ONNX Runtime export validation for edge deployment environments'
metrics: '3.8x Speedup • ~11MB Model'
tags: ['Python', 'PyTorch', 'Model Compression', 'Quantization', 'Pruning', 'ResNet-18', 'Edge AI', 'ONNX']
featured: true
order: 2
github: 'https://github.com/suresh4330/edge-model-compression-benchmark'
link: 'https://edge-model-compression-benchmark.vercel.app'
image: '/projects/edge-compression.svg'
---

## Overview

The **Edge Deployment Model Compression Benchmark (EDGE-BENCH)** evaluates the trade-offs between model size reduction, inference throughput, and classification accuracy when deploying deep convolutional networks on edge hardware.

## Optimization Pipeline

- **Baseline Architecture**: ResNet-18 on CIFAR-100 acting as the FP32 baseline standard.
- **Pruning**: Structural channel elimination removing redundant filters to accelerate standard matrix computation.
- **Quantization**: Converting 32-bit floating point weights into discrete 8-bit integers (INT8) yielding a 4x reduction in storage.
- **Distillation**: Teacher-student knowledge transfer using temperature-scaled softmax loss to recover accuracy.
- **Deployment**: Validated via ONNX Runtime with interactive web telemetry.
