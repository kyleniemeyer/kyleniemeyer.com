---
layout: name
section: Publications
top: Publications
permalink: /pubs/conf-DRGEP-strategies/
title: "DRGEP-based mechanism reduction strategies: graph search algorithms and skeletal primary reference fuel mechanisms"
author: "Kyle E. Niemeyer and Chih-Jen Sung"
date: 2011
conference: "49th AIAA Aerospace Sciences Meeting"
citation: "Kyle E. Niemeyer and Chih-Jen Sung (2011), DRGEP-based mechanism reduction strategies: graph search algorithms and skeletal primary reference fuel mechanisms, 49th AIAA Aerospace Sciences Meeting, Orlando, FL, USA, 4--7 January. doi:10.2514/6.2011-508"
doi: "10.2514/6.2011-508"
pdf: "/assets/pubs/niemeyer_sung_asm2011.pdf"
---

{{page.title}}
==============

## Abstract

Skeletal mechanism reduction based on the directed relation graph with error propagation (DRGEP) is explored with focus on the selection of graph search algorithm and application on primary reference fuels (PRF). It is demonstrated that R-value-based breadth-first search (BFS) and Dijkstra’s algorithm generate results independent of species order, while basic and modified depth-first search and basic BFS depend on the order of species in the reaction mechanism. Each of the search algorithms is also used with DRGEP to generate skeletal mechanisms for a detailed mechanism for n-heptane, consisting of 561 species and 2539 reactions, covering a comprehensive range of conditions for temperature, pressure, and equivalence ratio. Dijkstra’s algorithm combined with a coefficient scaling approach generates the most compact skeletal mechanism compared to the other search algorithms for a 30% error limit, with 131 species and 651 reactions. A comprehensive reduction scheme including DRGEP with Dijkstra’s algorithm followed by sensitivity analysis and unimportant reaction elimination is then applied on a large binary (n-heptane and iso-octane) PRF mechanism, containing 1034 species and 4236 reactions, to generate skeletal mechanisms at varying levels of detail. The skeletal mechanisms with ∼100 species adequately predict the ignition delay and laminar flame speed calculations of the detailed mechanism.

## BibTeX

    @conference{Niemeyer:2011b,
        Author = {Kyle E Niemeyer and Chih-Jen Sung},
        Booktitle = {Proceedings of the 49th AIAA Aerospace Sciences Meeting},
        Number = {AIAA 2011-508},
        Title = {DRGEP-based mechanism reduction strategies: graph search algorithms and skeletal primary reference fuel mechanisms},
        Month = jan,
        Location = {Orlando, FL, USA},
        Year = {2011},
        Doi = {10.2514/6.2011-508}
    }
