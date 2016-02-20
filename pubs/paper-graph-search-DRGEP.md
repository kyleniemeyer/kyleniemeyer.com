---
layout: pub
section: Publications
top: Publications
permalink: /pubs/paper-graph-search-DRGEP/
title: "On the importance of graph search algorithms for DRGEP-based mechanism reduction methods"
author: "Kyle E. Niemeyer and Chih-Jen Sung"
date: 2011
journal: "Combustion and Flame"
doi: "10.1016/j.combustflame.2010.12.010"
supplement:
citation: "Kyle E. Niemeyer and Chih-Jen Sung (2011), On the importance of graph search algorithms for DRGEP-based mechanism reduction methods, *Combustion and Flame*, 158(8):1439--1443. doi:10.1016/j.combustflame.2010.12.010"
pdf: "/assets/pubs/niemeyer_sung_cnf_2011.pdf"
---

## Abstract

The importance of graph search algorithm choice to the directed relation graph with error propagation (DRGEP) method is studied by comparing basic and modified depth-first search, basic and R-value-based breadth-first search (RBFS), and Dijkstra’s algorithm. By using each algorithm with DRGEP to produce skeletal mechanisms from a detailed mechanism for n-heptane with randomly-shuffled species order, it is demonstrated that only Dijkstra’s algorithm and RBFS produce results independent of species order. In addition, each algorithm is used with DRGEP to generate skeletal mechanisms for n-heptane covering a comprehensive range of autoignition conditions for pressure, temperature, and equivalence ratio. Dijkstra’s algorithm combined with a coefficient scaling approach is demonstrated to produce the most compact skeletal mechanism with a similar performance compared to larger skeletal mechanisms resulting from the other algorithms. The computational efficiency of each algorithm is also compared by applying the DRGEP method with each search algorithm on the large detailed mechanism for n-alkanes covering n-octane to n-hexadecane with 2115 species and 8157 reactions. Dijkstra’s algorithm implemented with a binary heap priority queue is demonstrated as the most efficient method, with a CPU cost two orders of magnitude less than the other search algorithms.

## BibTeX

    @article{Niemeyer:2011,
        Author = {Kyle E Niemeyer and Chih-Jen Sung},
        Title = {On the importance of graph search algorithms for {DRGEP}-based mechanism reduction methods},
        Journal = {Combust. Flame},
        Number = {8},
        Pages = {1439--1443},
        Volume = {158},
        Year = {2011},
        Doi = {10.1016/j.combustflame.2010.12.010}
    }
