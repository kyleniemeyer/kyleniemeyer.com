---
layout: pub
section: Publications
top: Publications
permalink: /pubs/paper-GPU-stiff-integrators/
title: "An investigation of GPU-based stiff chemical kinetics integration methods"
author: "Nicholas J. Curtis, Kyle E. Niemeyer, and Chih-Jen Sung"
date: 2016
journal:
doi:
arxiv: 1607.03884
supplement:
citation: "Nicholas J. Curtis, Kyle E. Niemeyer, and Chih-Jen Sung (2016), An investigation of GPU-based stiff chemical kinetics integration methods"
pdf:
---

## Abstract

A fifth-order implicit Runge--Kutta method and two fourth-order exponential integration methods equipped with Krylov subspace approximations were implemented for the GPU and paired with the analytical chemical kinetic Jacobian software `pyJac`. The performance of each algorithm was evaluated by integrating thermochemical state data sampled from stochastic partially stirred reactor simulations and compared with the commonly used CPU-based implicit integrator `CVODE`. We estimated that the implicit Runge--Kutta method running on a single GPU is equivalent to `CVODE` running on 12--38 CPU cores for integration of a single global integration time step of 1e-6 s with hydrogen and methane models. In the stiffest case studied---the methane model with a global integration time step of 1e-4 s---thread divergence and higher memory traffic significantly decreased GPU performance to the equivalent of `CVODE` running on approximately three CPU cores. The exponential integration algorithms performed more slowly than the implicit integrators on both the CPU and GPU. Thread divergence and memory traffic were identified as the main limiters of GPU integrator performance, and techniques to mitigate these issues were discussed. Use of a finite-difference Jacobian on the GPU---in place of the analytical Jacobian provided by `pyJac`---greatly decreased integrator performance due to thread divergence, resulting in maximum slowdowns of 7.11--240.96 times; in comparison, the corresponding slowdowns on the CPU were just 1.39--2.61 times, underscoring the importance of use of an analytical Jacobian for efficient GPU integration. Finally, future research directions for working towards enabling realistic chemistry in reactive-flow simulations via GPU/SIMD-accelerated stiff chemical kinetic integration were identified.

## BibTeX

    @article{Curtis:2016a,
        Author = {Nicholas J. Curtis and Kyle E. Niemeyer and Chih-Jen Sung},
        Title = {An investigation of GPU-based stiff chemical kinetics integration methods},
        Journal = {},
        Pages = {},
        Volume = {},
        Year = {2016},
        Note = {Under review. Available at \url{http://arxiv.org/abs/1607.03884}.}
    }
