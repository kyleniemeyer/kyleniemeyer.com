---
layout: pub
section: Publications
top: Publications
permalink: /pubs/paper-pyjac/
title: "pyJac: analytical Jacobian generator for chemical kinetics"
author: "Kyle E. Niemeyer, Nicholas J. Curtis, and Chih-Jen Sung"
date: 2016
journal:
doi:
supplement: "http://dx.doi.org/10.5281/zenodo.51139"
citation: "Kyle E. Niemeyer, Nicholas J. Curtis, and Chih-Jen Sung (2016), pyJac: analytical Jacobian generator for chemical kinetics, under review. arXiv:1605.03262 [physics.comp-ph]"
repository: "https://github.com/kyleniemeyer/pyJac-paper/"
---

## Abstract

Accurate simulations of combustion phenomena require the use of detailed chemical kinetics in order to capture limit phenomena such as ignition and extinction as well as predict pollutant formation. However, the chemical kinetic models for hydrocarbon fuels of practical interest typically have large numbers of species and reactions and exhibit high levels of mathematical stiffness in the governing differential equations, particularly for larger fuel molecules. In order to integrate the stiff equations governing chemical kinetics, generally reactive-flow simulations rely on implicit algorithms that require frequent Jacobian matrix evaluations. Some in situ and a posteriori computational diagnostics methods also require accurate Jacobian matrices, including computational singular perturbation and chemical ex- plosive mode analysis. Typically, finite differences numerically approximate these, but for larger chemical kinetic models this poses significant computational demands since the number of chemical source term evaluations scales with the square of species count. Furthermore, existing analytical Jacobian tools do not optimize evaluations or support emerging SIMD processors such as GPUs. Here we introduce `pyJac`, a Python-based open-source program that generates analytical Jacobian matrices for use in chemical kinetics modeling and analysis. In addition to producing the necessary customized source code for evaluating reaction rates (including all modern reaction rate formulations), the chemical source terms, and the Jacobian matrix, `pyJac` uses an optimized evaluation order to minimize computational and memory operations. As a demonstration, we first establish the correctness of the Jacobian matrices for kinetic models of hydrogen, methane, ethylene, and isopentanol oxidation (number of species ranging 13–360) by showing agreement within 0.001% of matrices obtained via automatic differentiation. We then demonstrate the performance achievable on CPUs and GPUs using `pyJac` via matrix evaluation timing comparisons; the routines produced by `pyJac` outperformed first-order finite differences by 2.9–5.3 times and the existing analytical Jacobian software `TChem` by 3.9–41 times. The Jacobian matrix generator we describe here will be useful for reducing the cost of integrating chemical source terms with implicit algorithms in particular and algorithms that require an accurate Jacobian matrix in general. Furthermore, the open-source release of the program and Python-based implementation will enable wide adoption.

## BibTeX

    @article{Niemeyer:2016py,
        Author = {Kyle E. Niemeyer and Nicholas J. Curtis and Chih-Jen Sung},
        Title = {\texttt{pyJac}: analytical Jacobian generator for chemical kinetics},
        Journal = {},
        Volume = {},
        Number = {},
        Pages = {},
        Doi = {},
        Year = {2016},
        Note = {Under review. Available at \url{http://arxiv.org/abs/1605.03262}.}
    }
