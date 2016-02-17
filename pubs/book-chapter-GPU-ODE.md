---
layout: pub
section: Publications
top: Publications
permalink: /pubs/book-chapter-GPU-ODE/
title: "GPU-Based Parallel Integration of Large Numbers of Independent ODE Systems"
author: "Kyle E. Niemeyer and Chih-Jen Sung"
date: 2014
book: "Numerical Computations with GPUs"
editor: "V. Kindratenko"
publisher: "Springer International Publishing, Switzerland"
doi: "10.1007/978-3-319-06548-9_8"
supplement:
citation: "Kyle E. Niemeyer and Chih-Jen Sung (2014), GPU-Based Parallel Integration of Large Numbers of Independent ODE Systems, In V. Kindratenko (Ed.), *Numerical Computations with GPUs*, Springer International Publishing, Switzerland, Ch. 8, pp. 159--182. doi:10.1007/978-3-319-06548-9_8"
---

{{page.title}}
==============

## Abstract

The task of integrating a large number of independent ODE systems arises in various scientific and engineering areas. For nonstiff systems, common explicit integration algorithms can be used on GPUs, where individual GPU threads concurrently integrate independent ODEs with different initial conditions or parameters. One example is the fifth-order adaptive Runge–Kutta–Cash–Karp (RKCK) algorithm. In the case of stiff ODEs, standard explicit algorithms require impractically small time-step sizes for stability reasons, and implicit algorithms are therefore commonly used instead to allow larger time steps and reduce the computational expense. However, typical high-order implicit algorithms based on backwards differentiation formulae (e.g., VODE, LSODE) involve complex logical flow that causes severe thread divergence when implemented on GPUs, limiting the performance. Therefore, alternate algorithms are needed. A GPU-based Runge–Kutta–Chebyshev (RKC) algorithm can handle moderate levels of stiffness and performs significantly faster than not only an equivalent CPU version but also a CPU-based implicit algorithm (VODE) based on results shown in the literature. In this chapter, we present the mathematical background, implementation details, and source code for the RKCK and RKC algorithms for use integrating large numbers of independent systems of ODEs on GPUs. In addition, brief performance comparisons are shown for each algorithm, demonstrating the potential benefit of moving to GPU-based ODE integrators.

## BibTeX

    @inbook{Niemeyer:2014bk,
        Author = {Kyle E Niemeyer and Chih Jen Sung},
        Title = {GPU-Based Parallel Integration of Large Numbers of Independent ODE Systems},
        Editor = {V Kindratenko},
        Booktitle = {Numerical Computations with GPUs},
        Publisher = {Springer},
        Address = {Switzerland},
        Chapter = {8},
        Pages = {159--182},
        Year = {2014},
        Doi = {10.1007/978-3-319-06548-9_8}
    }
