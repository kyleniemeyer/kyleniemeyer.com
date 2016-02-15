---
layout: name
section: Publications
top: Publications
permalink: /pubs/conf-GPU-NC/
title: "Using GPUs to accelerate nonstiff and stiff chemical kinetics in combustion simulations"
author: "Kyle E. Niemeyer"
date: 2015
conference: "15th International Conference on Numerical Combustion"
citation: "Kyle E. Niemeyer (2015), Using GPUs to accelerate nonstiff and stiff chemical kinetics in combustion simulations, 15th International Conference on Numerical Combustion, Avignon, France. 19--22 April 2015."
slides: "http://www.slideshare.net/kyleniemeyer/icnc15-niemeyer-talk"
---

{{page.title}}
==============

## Abstract

Combustion simulations with detailed chemical kinetics require the integration of a large number of ordinary differential equation (ODEs), with at least one ODE system per spatial location solved every time step. This task is well-suited to the massively parallel processing capabilities of graphics processing units (GPUs), where individual GPU threads concurrently integrate independent ODE systems for different spatial locations. However, the typical high-order implicit algorithms used in combustion modeling applications (e.g., VODE, LSODE) to handle stiffness involve complex logical flow that causes severe thread divergence when implemented on GPUs, thus limiting performance. Alternate algorithms are therefore needed. This talk will discuss strategies and results using integration algorithms for nonstiff and stiff chemical kinetics on GPUs.

## BibTeX

    @inproceedings{Niemeyer:2015nc,
    	Author = {Kyle E Niemeyer},
    	Title = {Using GPUs to accelerate nonstiff and stiff chemical kinetics in combustion simulations},
    	Booktitle = {15th International Conference on Numerical Combustion},
    	Location = {Avignon, France},
    	Month = apr,
    	Year = {2015}
    }
