---
layout: name
title: Publications
section: Work
---

Publications
============
Below are some of the papers I have published. Full information about my papers and citations can be found here:
- My [ResearcherID](http://www.researcherid.com/rid/B-7902-2008)
- My [Google Scholar profile](http://scholar.google.com/citations?user=dt0KRYoAAAAJ)

## Journal Articles ##

+-- {.section}
## 2011 ##

“On the importance of graph search algorithms for DRGEP-based mechanism reduction methods.”  
Kyle E. Niemeyer and Chih-Jen Sung.  
*Combustion and Flame*, 158 (8):1439--1443, August 2011.  
{ [pdf](/files/pubs/niemeyer_sung_cnf_2011.pdf) | [Abstract]() | [BibTeX]() | [doi](http://dx.doi.org/10.1016/j.combustflame.2010.12.010) }

 +-- {.abstract}
### Abstract ###
The importance of graph search algorithm choice to the directed relation graph with error propagation (DRGEP) method is studied by comparing basic and modified depth-first search, basic and R-value-based breadth-first search (RBFS), and Dijkstra’s algorithm. By using each algorithm with DRGEP to produce skeletal mechanisms from a detailed mechanism for n-heptane with randomly-shuffled species order, it is demonstrated that only Dijkstra’s algorithm and RBFS produce results independent of species order. In addition, each algorithm is used with DRGEP to generate skeletal mechanisms for n-heptane covering a comprehensive range of autoignition conditions for pressure, temperature, and equivalence ratio. Dijkstra’s algorithm combined with a coefficient scaling approach is demonstrated to produce the most compact skeletal mechanism with a similar performance compared to larger skeletal mechanisms resulting from the other algorithms. The computational efficiency of each algorithm is also compared by applying the DRGEP method with each search algorithm on the large detailed mechanism for n-alkanes covering n-octane to n-hexadecane with 2115 species and 8157 reactions. Dijkstra’s algorithm implemented with a binary heap priority queue is demonstrated as the most efficient method, with a CPU cost two orders of magnitude less than the other search algorithms.
 =--

 +-- {.bibtex}
### BibTeX ###
    @article{Niemeyer:2011,
	Author = {Kyle E Niemeyer and Chih-Jen Sung},
	Title = {On the importance of graph search algorithms for {DRGEP}-based mechanism reduction methods},
	Journal = {Combust. Flame},
	Number = {8},
	Pages = {1439-1443},
	Volume = {158},
	Year = {2011},
	Doi = {10.1016/j.combustflame.2010.12.010}}
 =--

=--

+-- {.section}
# 2010 #

“Skeletal mechanism generation for surrogate fuels using directed relation graph with error propagation and sensitivity analysis.”  
Kyle E. Niemeyer, Chih-Jen Sung, and Mandhapati P. Raju.  
*Combustion and Flame*, 157 (9):1760--1770, September 2010.  
\{ [pdf](/files/pubs/niemeyer_sung_raju_cnf_2010.pdf) | [Abstract]() | [BibTeX]() | [doi](http://dx.doi.org/10.1016/j.combustflame.2009.12.022) \}

 +-- {.abstract}
### Abstract ###
A novel implementation for the skeletal reduction of large detailed reaction mechanisms using the directed relation graph with error propagation and sensitivity analysis (DRGEPSA) is developed and presented with examples for three hydrocarbon components, n-heptane, iso-octane, and n-decane, relevant to surrogate fuel development. DRGEPSA integrates two previously developed methods, directed relation graph-aided sensitivity analysis (DRGASA) and directed relation graph with error propagation (DRGEP), by first applying DRGEP to efficiently remove many unimportant species prior to sensitivity analysis to further remove unimportant species, producing an optimally small skeletal mechanism for a given error limit. It is illustrated that the combination of the DRGEP and DRGASA methods allows the DRGEPSA approach to overcome the weaknesses of each, specifically that DRGEP cannot identify all unimportant species and that DRGASA shields unimportant species from removal. Skeletal mechanisms for n-heptane and iso-octane generated using the DRGEP, DRGASA, and DRGEPSA methods are presented and compared to illustrate the improvement of DRGEPSA. From a detailed reaction mechanism for n-alkanes covering n-octane to n-hexadecane with 2115 species and 8157 reactions, two skeletal mechanisms for n-decane generated using DRGEPSA, one covering a comprehensive range of temperature, pressure, and equivalence ratio conditions for autoignition and the other limited to high temperatures, are presented and validated. The comprehensive skeletal mechanism consists of 202 species and 846 reactions and the high- temperature skeletal mechanism consists of 51 species and 256 reactions. Both mechanisms are further demonstrated to well reproduce the results of the detailed mechanism in perfectly-stirred reactor and laminar flame simulations over a wide range of conditions. The comprehensive and high-temperature n-decane skeletal mechanisms are included as supplementary material with this article.
 =--

 +-- {.bibtex}
### BibTeX ###
    @article{Niemeyer:2010a,
	Author = {Kyle E Niemeyer and Chih Jen Sung and Mandhapati P Raju},
	Title = {Skeletal mechanism generation for surrogate fuels using directed relation graph with error propagation and sensitivity analysis},
	Journal = {Combust. Flame},
	Month = {September},
	Number = {9},
	Pages = {1760--1770},
	Volume = {157},
	Year = {2010},
	Doi = {10.1016/j.combustflame.2009.12.022}}
 =--

=--

+-- {.section}
# 2009 #

“Three-dimensional surface texture visualization of bone tissue through epifluorescence-based serial block face imaging.”  
C. R. Slyfield Jr., K. E. Niemeyer, E. V. Tkachenko, R. E. Tomlinson, G. G. Steyer, C. G. Patthanacharoenphon, G. J. Kazakia, D. L. Wilson, and C. J. Hernandez.  
*Journal of Microscopy*, 236 (1):52--59, October 2009.  
\{ [BibTeX]() | [doi](http://dx.doi.org/10.1111/j.1365-2818.2009.03204.x) \}

 +-- {.bibtex}
### BibTeX ###
    @article{SlyfieldJr:2009,
	Author = {Slyfield Jr, CR and Niemeyer, Kyle Evan and Tkachenko, EV and Tomlinson, RE and Steyer, GG and Patthanacharoenphon, CG and Kazakia, GJ and Wilson, DL and Hernandez, CJ},
	Title = {Three-dimensional surface texture visualization of bone tissue through epifluorescence-based serial block face imaging},
	Journal = {J. Microscopy},
	Volume = {236},
	Number = {1},
	Month = {October},
	Pages = {52--59},
	Year = {2009},
	Doi = {10.1111/j.1365-2818.2009.03204.x}}
 =--

=--

## Conference Papers ##

+-- {.section}
# 2012 #

“Recent Progress and Challenges in Exploiting Graphics Processors for Aeropropulsion Simulations.”  
Kyle E. Niemeyer and Chih-Jen Sung.  
Fourth International Symposium on Jet Propulsion and Power Engineering, Xi’an, China, September 10--12, 2012.

=--

+-- {.section}
# 2011 #

“Turbulence-chemistry closure method using graphics processing units: a preliminary test.”  
Kyle E. Niemeyer, Chih-Jen Sung, Catalin G. Fotache, and Jeremiah C. Lee.  
7th Fall Technical Meeting of the Eastern States Section of the Combustion Institute, Storrs, CT, USA, October 9--12, 2011.  
\{ [pdf](/files/pubs/niemeyer_etal_essci2011.pdf) | [Abstract]() | [BibTeX]() \}

 +-- {.abstract}
### Abstract ###
Graphics processing units (GPUs) are attractive for high-performance computing due to their massively parallel architecture, modest power consumption, and relatively low cost. Recent attempts were made to speed up the chemical kinetics in reactive-flow simulations. However, these approaches did not realize the full potential of the GPU as inter-processor communication was intensive. In some popular high-fidelity closure models, there is a very large set (e.g. 10<sup>4</sup>--10<sup>6</sup>) of independent chemical kinetics integrations to perform. This leads to a new strategy of performing all the chemistry integrations on the GPU to minimize communication between the CPU and GPU and to maximize the computational load on the GPU. We demonstrated this technique with a detailed hydrogen kinetics system (9 species and 38 reactions) and observed a speed up factor of 70. Also, the computing time on the GPU is short enough that when the CPU is designed to handle the transport terms, the impact of chemistry on the overall computational "clock time" is minimal. Thus, for practical-scale LES simulations, the GPU allows the inclusion of detailed kinetics in closure models.
 =--

 +-- {.bibtex}
### BibTeX ###
    @inproceedings{Niemeyer:2011c,
	Author = {Kyle Evan Niemeyer and Chih-Jen Sung and Catalin G Fotache and Jeremiah C Lee},
	Title = {Turbulence-chemistry closure method using graphics processing units: a preliminary test},
	Booktitle = {7th Fall Technical Meeting of the Eastern States Section of the Combustion Institute},
	Address = {Storrs, Connecticut},
	Month = {October},
	Year = {2011}}
 =--

“Mechanism reduction strategies for multicomponent gasoline surrogate fuels.”  
Kyle E. Niemeyer and Chih-Jen Sung.  
7th National Combustion Meeting, Atlanta, GA, USA, March 20--23, 2011.  
\{ [pdf](/files/pubs/niemeyer_sung_ncm2011.pdf) | [Abstract]() | [BibTeX]() \}

 +-- {.abstract}
### Abstract ###
Skeletal mechanisms for TRF mixtures were generated using DRGEPSA followed by unimportant reaction elimination. A detailed mechanism with 1389 species and 5935 reactions was reduced to different levels of complexity ranging from 386 species and 1591 reactions (lowest error) to 173 species and 689 reactions (highest error). Validation was performed using ignition delay and laminar flame speed calculations, and good agreement with the detailed mechanism was found for the error limits considered. Representative HCCI simulations of normal and low-load operation were also performed using the skeletal mechanisms. All skeletal mechanisms predict ignition to within 4 CA degrees, but only the largest skeletal mechanism to within 1 CA degree. Fuel and CO mole fraction profiles were also compared with good agreement in general, but noticeable error in the exit CO mole fraction for the very lean low-load case.
 =--

 +-- {.bibtex}
### BibTeX ###
    @conference{Niemeyer:2011a,
	Author = {Kyle E Niemeyer and Chih-Jen Sung},
	Title = {Mechanism reduction strategies for multicomponent gasoline surrogate fuels},
	Booktitle = {Proceedings of the 7th National Combustion Meeting},
	Number = {1A15},
	Year = {2011}}
 =--

“DRGEP-based mechanism reduction strategies: graph search algorithms and skeletal primary reference fuel mechanisms.”  
Kyle E. Niemeyer and Chih-Jen Sung.  
49th AIAA Aerospace Sciences Meeting, Orlando, FL, USA, January 4--7, 2011.  
\{ [pdf](/files/pubs/niemeyer_sung_asm2011.pdf) | [Abstract]() | [BibTeX]() \}

 +-- {.abstract}
### Abstract ###
Skeletal mechanism reduction based on the directed relation graph with error propagation (DRGEP) is explored with focus on the selection of graph search algorithm and application on primary reference fuels (PRF). It is demonstrated that R-value-based breadth-first search (BFS) and Dijkstra’s algorithm generate results independent of species order, while basic and modified depth-first search and basic BFS depend on the order of species in the reaction mechanism. Each of the search algorithms is also used with DRGEP to generate skeletal mechanisms for a detailed mechanism for n-heptane, consisting of 561 species and 2539 reactions, covering a comprehensive range of conditions for temperature, pressure, and equivalence ratio. Dijkstra’s algorithm combined with a coefficient scaling approach generates the most compact skeletal mechanism compared to the other search algorithms for a 30% error limit, with 131 species and 651 reactions. A comprehensive reduction scheme including DRGEP with Dijkstra’s algorithm followed by sensitivity analysis and unimportant reaction elimination is then applied on a large binary (n-heptane and iso-octane) PRF mechanism, containing 1034 species and 4236 reactions, to generate skeletal mechanisms at varying levels of detail. The skeletal mechanisms with ∼100 species adequately predict the ignition delay and laminar flame speed calculations of the detailed mechanism.
 =--

 +-- {.bibtex}
### BibTeX ###
    @conference{Niemeyer:2011b,
    Author = {Kyle E Niemeyer and Chih-Jen Sung},
    Booktitle = {Proceedings of the 49th AIAA Aerospace Sciences Meeting},
    Number = {AIAA 2011-508},
    Title = {\{DRGEP}-based mechanism reduction strategies: graph search algorithms and skeletal primary reference fuel mechanisms},
    Year = {2011}}
 =--

=--

+-- {.section}
# 2010 #

“Skeletal mechanism generation of surrogate jet fuels for aero-propulsion modeling.”  
Chih-Jen Sung and Kyle E. Niemeyer.  
_AIP Conference Proceedings_, 1233 (1):1412--1417, May 2010.  
\{ [Abstract]() | [BibTeX]() | [doi](http://dx.doi.org/10.1063/1.3452113) \}

 +-- {.abstract}
### Abstract ###
A novel implementation for the skeletal reduction of large detailed reaction mechanisms using the directed relation graph with error propagation and sensitivity analysis (DRGEPSA) is developed and presented with skeletal reductions of two important hydrocarbon components, n‐heptane and n‐decane, relevant to surrogate jet fuel development. DRGEPSA integrates two previously developed methods, directed relation graph‐aided sensitivity analysis (DRGASA) and directed relation graph with error propagation (DRGEP), by first applying DRGEP to efficiently remove many unimportant species prior to sensitivity analysis to further remove unimportant species, producing an optimally small skeletal mechanism for a given error limit. It is illustrated that the combination of the DRGEP and DRGASA methods allows the DRGEPSA approach to overcome the weaknesses of each previous method, specifically that DRGEP cannot identify all unimportant species and that DRGASA shields unimportant species from removal.
 =--

 +-- {.bibtex}
### BibTeX ###
    @article{Sung:2010,
	Author = {Chih-Jen Sung and Kyle E Niemeyer},
	Title = {Skeletal Mechanism Generation of Surrogate Jet Fuels for Aeropropulsion Modeling},
	Journal = {AIP Conference Proceedings},
	Editor = {Jane W. Z. Lu and Andrew Y. T. Leung and Vai Pan Iu and Kai Meng Mok},
	Volume = {1233},
	Number = {1},
	Pages = {1412--1417},
	Publisher = {AIP},
	Url = {http://link.aip.org/link/?APC/1233/1412/1},
	Doi = {10.1063/1.3452113}}
 =--

=--

+-- {.section}
# 2009 #

“Skeletal Mechanism Generation of Surrogate Fuels Using Directed Relation Graph with Error Propagation and Sensitivity Analysis.”  
Kyle E. Niemeyer, Mandhapati P. Raju, and Chih-Jen Sung.  
45th AIAA/ASME/SAE/ASEE Joint Propulsion Conference and Exhibit, Denver, CO, USA, August 2--5, 2009.  
\{ [pdf](/files/pubs/niemeyer_raju_sung_jpc2009.pdf) | [Abstract]() | [BibTeX]() \}

 +-- {.abstract}
### Abstract ###
A novel implementation for the skeletal reduction of large detailed reaction mechanisms using the directed relation graph with error propagation and sensitivity analysis (DRGEPSA) is developed and presented with skeletal reductions of three hydrocarbon components, n-heptane, iso-octane, and n-decane, relevant to surrogate jet fuel development. DRGEPSA integrates two previously developed methods, directed relation graph-aided sensitivity analysis (DRGASA) and directed relation graph with error propagation (DRGEP), by first applying DRGEP to efficiently remove many unimportant species prior to sensitivity analysis to further remove unimportant species, producing an optimally small skeletal mechanism for a given error limit. It is illustrated that the combination of the DRGEP and DRGASA methods allowed the DRGEPSA approach to overcome the weaknesses of each, specifically that DRGEP cannot identify all unimportant species and that DRGASA shields unimportant species from removal.
 =--

 +-- {.bibtex}
### BibTeX ###
    @inproceedings{Niemeyer:2009a,
	Author = {Kyle Evan Niemeyer and Mandhapati P Raju and Chih-Jen Sung},
	Title = {Skeletal Mechanism Generation of Surrogate Fuels Using Directed Relation Graph with Error Propagation and Sensitivity Analysis},
	Booktitle = {Proceedings of the 45th AIAA/ASME/SAE/ASEE Joint Propulsion Conference & Exhibit},
	Month = {August},
	Number = {{AIAA 2009-5495}},
	Address = {Denver, Colorado},
	Year = {2009}}
 =--

“Skeletal Mechanism Generation for Surrogate Fuels Using Directed Relation Graph with Error Propagation and Sensitivity Analysis.”  
Kyle E. Niemeyer, Mandhapati P. Raju, and Chih-Jen Sung.  
6th National Combustion Meeting, Ann Arbor, MI, USA, May 17--20, 2009.  
\{ [pdf](/files/pubs/niemeyer_raju_sung_ncm2009.pdf) | [Abstract]() | [BibTeX]() \}

 +-- {.abstract}
### Abstract ###
A novel implementation, using directed relation graph with error propagation and sensitivity analysis (DRGEPSA), for the skeletal reduction of large detailed reaction mechanisms was developed and presented. DRGEPSA integrates two previous methods, directed relation graph with error propagation (DRGEP) and directed relation graph aided sensitivity analysis (DRGASA), by first applying DRGEP to efficiently remove many unimportant species prior to sensitivity analysis to further eliminate unimportant species. A skeletal reduction of a detailed n-heptane mechanism was performed to illustrate the individual weaknesses of DRGEP and DRGASA and to show that DRGEPSA diminished these weaknesses. Furthermore, a comprehensive skeletal mechanism for n-decane was generated using DRGEPSA to demonstrate the applicability of the DRGEP method to the skeletal reduction of large surrogate fuel mechanisms. Specifically, the detailed mechanism of n-decane containing 940 species and 3887 reactions was reduced to a skeletal mechanism containing 211 species and 794 reactions, which exhibits good performance in predicting ignition delays over a wide range of equivalence ratios, temperatures, and pressures.
 =--

 +-- {.bibtex}
### BibTeX ###
    @inproceedings{Niemeyer:2009,
	Author = {Kyle Evan Niemeyer and Mandhapati P Raju and Chih-Jen Sung},
	Title = {Skeletal Mechanism Generation for Surrogate Fuels Using Directed Relation Graph with Error Propagation and Sensitivity Analysis},
	Booktitle = {Proceedings of the 6th National Combustion Meeting of the U.S. Sections of the Combustion Institute},
	Address = {Ann Arbor, Michigan},
	Month = {May},
	Number = {11F1},
	Year = {2009}}
 =--

=--


## Thesis ##

+-- {.section}
# 2010 #
_Skeletal mechanism generation for surrogate fuels_  
Kyle E. Niemeyer  
Department of Mechanical and Aerospace Engineering, Case Western Reserve
University, Cleveland, Ohio.  
\{ [pdf](/files/pubs/Niemeyer_thesis.pdf) | [Abstract]() | [BibTeX]() \}

 +-- {.abstract}
### Abstract ###
The Mechanism Automatic Reduction Software (MARS) implementation for chemical reaction mechanism reduction, with special emphasis on skeletal reduction using the directed relation graph with error propagation and sensitivity analysis (DRGEPSA), is developed and demonstrated with examples for three hydrocarbon components, n-heptane, iso-octane, and n-decane, relevant to surrogate fuel development. DRGEPSA integrates two previously developed methods, directed relation graph-aided sensitivity analysis (DRGASA) and directed relation graph with error propagation (DRGEP), by first applying DRGEP to efficiently remove many unimportant species prior to sensitivity analysis to further remove unimportant species, producing an optimally small skeletal mechanism for a given error limit. It is illustrated that the combination of the DRGEP and DRGASA methods allows the DRGEPSA approach to overcome the weaknesses of each, specifically that DRGEP cannot identify all unimportant species and that DRGASA shields unimportant species from removal. Skeletal mechanisms for n-heptane and iso-octane generated using the DRGEP, DRGASA, and DRGEPSA methods are presented and compared to illustrate the improvement of DRGEPSA. Two skeletal mechanisms for n-decane generated using DRGEPSA, one covering a comprehensive range of temperature, pressure, and equivalence ratio conditions for autoignition and the other limited to high temperatures, are presented and validated. Both mechanisms are further demonstrated to well reproduce the results of the detailed mechanism in perfectly-stirred reactor and laminar flame simulations over a wide range of conditions.
 =--

 +-- {.bibtex}
### BibTeX ###
    @mastersthesis{Niemeyer:2010,
	Address = {Cleveland, OH},
	Author = {Kyle Evan Niemeyer},
	Month = {January},
	School = {Department of Mechanical and Aerospace Engineering, Case Western Reserve University},
	Title = {Skeletal mechanism generation for surrogate fuels},
	Year = {2010}}
 =--

=--

-------------------
**Copyright info:** Follow the DOI link for the official published version of the journal articles. The PDF articles posted are the final, accepted manuscript versions since most publishers do not allow the open release of the official version. If you would like such an official version (as published in the journal) and you do not have access, just [email me](mailto:niemeyer@case.edu).


<script type="text/javascript" src="/files/js/jquery.js"> </script>
<script type="text/javascript">
	$(document).ready(function(){
		$("a:contains('BibTeX')").click(function(event) { 
			$(this).parent().nextAll(".bibtex").first().slideToggle("fast"); });

		$("a:contains('BibTeX')").toggle(
			function(){ $(this).text("Hide BibTeX") },
			function(){ $(this).text("BibTeX") }
		);

		$("a:contains('Abstract')").click(function(event) { 
			$(this).parent().nextAll(".abstract").first().slideToggle("fast"); });

		$("a:contains('Abstract')").toggle(
			function(){ $(this).text("Hide Abstract") },
			function(){ $(this).text("Abstract") }
		);

	});
</script>