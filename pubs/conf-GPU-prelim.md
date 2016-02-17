---
layout: pub
section: Publications
top: Publications
permalink: /pubs/conf-GPU-prelim/
title: "Turbulence-chemistry closure method using graphics processing units: a preliminary test"
author: "Kyle E. Niemeyer, Chih-Jen Sung, Catalin G. Fotache, and Jeremiah C. Lee"
date: 2011
conference: "7th Fall Technical Meeting of the Eastern States Section of the Combustion Institute"
citation: "Kyle E. Niemeyer, Chih-Jen Sung, Catalin G. Fotache, and Jeremiah C. Lee (2011), Turbulence-chemistry closure method using graphics processing units: a preliminary test, 7th Fall Technical Meeting of the Eastern States Section of the Combustion Institute, Storrs, CT, USA, 9--12 October."
pdf: "/assets/pubs/niemeyer_etal_essci2011.pdf"
---

{{page.title}}
==============

## Abstract

Graphics processing units (GPUs) are attractive for high-performance computing due to their massively parallel architecture, modest power consumption, and relatively low cost. Recent attempts were made to speed up the chemical kinetics in reactive-flow simulations. However, these approaches did not realize the full potential of the GPU as inter-processor communication was intensive. In some popular high-fidelity closure models, there is a very large set (e.g. 10<sup>4</sup>--10<sup>6</sup>) of independent chemical kinetics integrations to perform. This leads to a new strategy of performing all the chemistry integrations on the GPU to minimize communication between the CPU and GPU and to maximize the computational load on the GPU. We demonstrated this technique with a detailed hydrogen kinetics system (9 species and 38 reactions) and observed a speed up factor of 70. Also, the computing time on the GPU is short enough that when the CPU is designed to handle the transport terms, the impact of chemistry on the overall computational "clock time" is minimal. Thus, for practical-scale LES simulations, the GPU allows the inclusion of detailed kinetics in closure models.

## BibTeX

    @inproceedings{Niemeyer:2011c,
    	Author = {Kyle Evan Niemeyer and Chih-Jen Sung and Catalin G Fotache and Jeremiah C Lee},
    	Title = {Turbulence-chemistry closure method using graphics processing units: a preliminary test},
    	Booktitle = {7th Fall Technical Meeting of the Eastern States Section of the Combustion Institute},
    	Location = {Storrs, CT, USA},
    	Month = oct,
    	Year = {2011}
    }
