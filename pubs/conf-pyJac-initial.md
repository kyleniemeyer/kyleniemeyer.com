---
layout: pub
section: Publications
top: Publications
permalink: /pubs/conf-pyJac-initial/
title: "Initial investigation of `pyJac`: an analytical Jacobian generator for chemical kinetics"
author: "Kyle E. Niemeyer, Nicholas J. Curtis, and Chih-Jen Sung"
date: 2015
conference: "ASME 2014 Internal Combustion Engine Division Fall Technical Conference (ICEF)"
doi: "10.6084/m9.figshare.2075515.v1"
supplement:
citation: "Kyle E. Niemeyer, Nicholas J. Curtis, and Chih-Jen Sung (2015), Initial investigation of `pyJac`: an analytical Jacobian generator for chemical kinetics, Fall 2015 Meeting of the Western States Section of the Combustion Institute, Provo, UT, USA. 5--6 October 2015. Paper 134CK-0019. doi:10.6084/m9.figshare.2075515.v1"
pdf: "/assets/pubs/Niemeyer_etal_WSSCI2015.pdf"
slides: "http://www.slideshare.net/kyleniemeyer/initial-investigation-of-pyjac-an-analytical-jacobian-generator-for-chemical-kinetics"
---

## Abstract

Accurate simulations of combustion phenomena require the use of detailed chemical kinetics in order to capture limit phenomena such as ignition and extinction as well as predict pollutant formation. However, the chemical kinetic models for hydrocarbon fuels of practical interest exhibit both mathematical stiffness in the governing differential equations and large numbers of species and reactions, particularly for larger molecules. In order to integrate the stiff equations governing chemical kinetics, generally reactive-flow simulations rely on implicit algorithms that require frequent Jacobian matrix evaluations; in addition, various computational combustion diagnostics methods require accurate Jacobian matrices. Typically, finite differences numerically approximate these, but for larger chemical kinetic models this poses significant computational demands since the number of chemical source term evaluations scales with the square of species count. Furthermore, existing analytical Jacobian tools do not optimize evaluations or support emerging SIMD processors such as GPUs. Here we introduce `pyJac`, a Python-based open-source program that generates analytical Jacobian matrices for use in chemical kinetics modeling and analysis. In addition to producing the necessary customized source code for evaluating reaction rates (including all modern reaction rate formulations), the chemical source terms, and the Jacobian matrix, `pyJac` uses an optimized evaluation order to minimize computational and memory operations. First, we establish the correctness of the Jacobian matrices for kinetic models of hydrogen, methane, and ethylene oxidation (number of species ranging 13--111) by showing agreement within 1% of high-order finite difference approximations. We then demonstrate the performance, via matrix evaluation timing comparisons, achievable on CPUs and GPUs using `pyJac`. The Jacobian matrix generator we describe here will be useful for reducing the cost of integrating chemical source terms with implicit algorithms in particular and algorithms that require an accurate Jacobian matrix in general. Furthermore, the open-source release of the program and Python-based implementation will enable wide adoption.

## BibTeX

    @inproceedings{Niemeyer:2015ws,
        Author = {Kyle E. Niemeyer and Nicholas J. Curtis and Chih-Jen Sung},
        Title = {Initial investigation of pyJac: an analytical Jacobian generator for chemical kinetics},
        Booktitle = {Fall 2015 Meeting of the Western States Section of the Combustion Institute},
        Location = {Provo, UT, USA},
        Month = oct,
        Note = {Paper No. 134CK-0019},
        Year = {2015}
    }
