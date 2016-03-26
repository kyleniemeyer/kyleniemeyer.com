---
layout: pub
section: Publications
top: Publications
permalink: /pubs/PhD-dissertation/
title: "<i>Reducing the Cost of Chemistry in Reactive-Flow Simulations: Novel Mechanism Reduction Strategies and Acceleration via Graphics Processing Units</i>"
author: "Kyle E. Niemeyer"
date: 2013
citation: "Kyle E. Niemeyer (2013) _Reducing the Cost of Chemistry in Reactive-Flow Simulations: Novel Mechanism Reduction Strategies and Acceleration via Graphics Processing Units_, PhD dissertation, Department of Mechanical and Aerospace Engineering, Case Western Reserve University, Cleveland, Ohio."
link: "http://rave.ohiolink.edu/etdc/view?acc_num=case1378393709"
pdf: "/assets/pubs/KE-Niemeyer-dissertation.pdf"
---

## Abstract

Two approaches for reducing the cost of detailed and accurate chemistry in reactive- flow simulations were studied and developed, specifically based on reaction mechanism reduction and GPU computing.  

The first part of this dissertation studied mechanism reduction methods. First, the reliability and efficacy of various graph search algorithms were compared for the DRGEP mechanism reduction method, and it was demonstrated that Dijkstra’s algorithm out-performed all others considered in terms of effectiveness and speed. Next, reduction strategies for multicomponent surrogate fuel mechanisms were demonstrated, based on the combination of DRGEPSA and unimportant reaction elimination using autoignition results, by generating skeletal mechanisms at varying levels of detail for TRFs (n-heptane, iso-octane, and toluene). It was shown that significant reduction in mechanism size is possible, but care must be taken for wide-ranging accuracy, specifically for predicting phenomena outside autoignition, for accurate results across the mixture composition space, and to ensure close prediction of species profiles particularly for ultra-lean conditions. Finally, building on the previous results, a combined reduction strategy consisting of DRGEPSA, unimportant reaction elimination, isomer lumping, and CSP-based QSS reduction was used to generate skeletal and reduced mechanisms for a gasoline surrogate consisting of iso-octane, n-heptane, toluene, and 2-pentene. Different mechanisms were generated respectively targeted at lower-temperature HCCI-like and high-temperature SI/CI-engine conditions; validation was performed using autoignition, PSR, and laminar flame speed calculations.  

In the second part, the use of GPUs for accelerating reactive-flow simulation was studied. Strategies for optimizing CFD applications on GPUs were demonstrated using case studies solving the Laplace equation and flow in a lid-driven cavity. In addition, a comprehensive survey of efforts to date using GPUs to accelerate laminar, turbulent, and reactive flow solvers, including approaches based on the lattice Boltzmann method, was performed, and general findings and specific recommendations were made. Following this, a new strategy for integrating chemical kinetics with little-to-moderate stiffness on GPUs was presented. This approach used the Runge–Kutta–Cash–Karp algorithm to handle nonstiff hydrogen chemistry and the stabilized Runge–Kutta–Chebyshev algorithm to handle moderately stiff chemistry for hydrogen/carbon monoxide, methane, and ethylene kinetics. Speedup factors of between one and two orders of magnitude were shown compared to CPU-based integration algorithms. In the presence of more severe stiffness, the current algorithms were less effective, demonstrating the need for GPU-appropriate stiff method.

## BibTeX

    @phdthesis{Niemeyer:2013,
        Author = {Kyle Evan Niemeyer},
        Month = jan,
        School = {Case Western Reserve University},
        Location = {Cleveland, OH},
        Title = {Reducing the Cost of Chemistry in Reactive-Flow Simulations: Novel Mechanism Reduction Strategies and Acceleration via Graphics Processing Units},
        Year = {2013}
    }
