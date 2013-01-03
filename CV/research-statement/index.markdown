---
layout: name
title: Research Statement
section: CV
top: Kyle Niemeyer
---

+-- {.section}
Download the most recent version of my research statement here: \{[pdf](https://www.dropbox.com/s/aes2wjatwk8fsvg/kyle-niemeyer-research-statement.pdf)\}
=--

Research Statement
==================

In order to design the next generation of clean, efficient vehicle engines and power plant combustors, engineers need the next generation of computational simulation tools. The complex physical phenomena present in such systems, including turbulence, chemical reaction, and liquid sprays, necessitate more accurate models for reliable prediction. Of course, with greater detail and accuracy comes increased computational expense; such models are typically too costly to use in practical simulations. Unfortunately, we can no longer rely on increasing processor performance, as material limits on power dissipation prevent central processing units from becoming much more powerful. In addition to improving algorithms and developing new, accurate but computationally inexpensive models, computational strategies need to be redesigned for implementation massively parallel processors such as graphics processing units (GPUs), which offer greatly increased performance but at lower costs and power consumption than traditional parallel computing clusters.

In brief, in my research efforts to date I focused on reducing the cost of chemistry in reactive-flow simulations through reaction mechanism reduction and acceleration by GPUs. My future research plans include extending on my efforts in this area to simulations of turbulent and spray combustion, automated design and optimization based on computational simulations, and generally accelerating science and engineering simulations through GPU computing.

Research Summary
----------------

### Reaction mechanism reduction

One major challenge of incorporating accurate, detailed chemistry in reactive-flow simulations is the large size of the reaction mechanisms, particularly for liquid fuels. I developed a new method to reduce the size of such detailed reaction mechanisms while retaining enough species and reactions in order to accurately capture important species and predict global phenomena such as ignition and extinction[^1]. This approach combined a graph-theory-based algorithm with sensitivity analysis. My reduction software has been adopted by other groups[^2], and I plan to continue development in this area by adding additional cost reduction components---for example, reducing stiffness by treating quasi-steady-state species.

Following this initial work, I coauthored a follow-up paper[^3] where we showed the importance of employing the proper graph search algorithm in the above and related methods. In addition, I demonstrated a search algorithm that not only reliably gives the correct results but also runs two orders of magnitude faster than previously employed algorithms.

### GPU acceleration of reactive-flow simulations

Even with smaller mechanism sizes, the evaluation of detailed chemistry terms occupies more than 90% of the total computational time in reactive-flow simulations, dominating the computational cost. One way to reduce this is to exploit the high performance of massively parallel GPUs. I developed a GPU-based approach for explicit integration of non-stiff chemical kinetics and demonstrated it using a compact mechanism for hydrogen[^4], showing a performance improvement of up to 70 times compared with an equivalent method on the CPU. Currently, I am developing an algorithm for the integration of stiff chemical kinetics on GPUs.

I recently coauthored a review[^5] on progress in exploiting GPUs to accelerate simulations of both nonreactive and reactive flows. In it, I also presented case studies of heat conduction in a plate and lid-driven flow in a cavity that demonstrated the potential improvement in performance with even simple codes.

Future Research
---------------

My primary research goal is to develop algorithms and strategies to include more accurate physical models in practical simulations of combustion and reactive flows. This will build and expand upon my previous work in developing methods to reduce the cost of chemical models in such simulations. Designing new algorithms and strategies for exploiting GPUs is important for simulations performed on both large scientific clusters---which are increasingly turning to GPUs for improved performance as well as lower costs and power consumption---and smaller workstations. In addition to building these tools for industrial designers and engineers, I plan to use them to investigate practical engineering and design problems, as well as for scientific investigation of important physical phenomena. A number of funding agencies are interested in projects in these areas, including (1) the DOE's Basic Energy Sciences division, which wants the tools "required to advance the state of the art for predictive simulation of internal combustion engines: the dynamics of fuel-injection sprays and stochastic combustion processes"[^6], (2) the Army Research Laboratory, which requires "new computational methods to be able to model complex reacting systems" to optimize engine performance[^7], and (3) the Air Force Office of Scientific Research, which is interested in new "numerical approaches to simplify and reduce complex mathematical systems applicable to combustion modeling" in order to perform numerical experiments of key combustion phenomena[^8].

### Accelerating turbulent combustion modeling

From automotive and aircraft engines to forest fires, nearly all real-world reacting flows of engineering and scientific interest are turbulent, so practical simulations of combustion require modeling of turbulence in addition to chemical reactions. Such simulations are further complicated by the need to model the complex relationship between turbulence and chemistry. I plan to extend my work on methods reducing the cost of chemistry, both on the mechanism reduction side as well as GPU acceleration, to the turbulence-chemistry interaction models needed in simulations of turbulent combustion. This will not only allow the greater use and improvement of existing models such as the transported probability density function---which has been used sparingly in high-fidelity of automotive engines due to the high computational cost[^9]---but also the development of new models.

### Improving spray modeling algorithms

The combustion of liquid, turbulent sprays lies at the heart of many devices important for power production and industrial processes, such as internal combustion engines, gas turbines, and furnaces. However, next to modeling of chemical reactions, accurately representing sprays and the breakup of liquid jets is one of the biggest challenges in such simulations, due to the presence of multiple scales, phases, and the many phenomena and interactions droplets experience. In order to incorporate predictive models of liquid sprays in practical simulations, existing numerical algorithms need to be improved. This will also ease model development and validation.

I plan to research this problem, building on my work accelerating simulation codes using GPUs. Both engineering-quality simulations using Lagrangian droplet/particle-tracking models[^10] and scientific-quality investigations relying on the more accurate and computationally intensive Eulerian multiphase continuum models[^11] will benefit from improved numerical algorithms and implementation on massively parallel processors like GPUs.

### Developing GPU strategies for engineering and science application

I also plan to bring my experience working with GPUs to more broad engineering and science applications as well. For example, there is interest in using GPUs to speed up MRI processing and other expensive medical calculations[^12], as well as quantum chemistry calculations[^13] and computational finance[^14]. I will collaborate with groups working on not only problems like these, but others where the computational benefits have not yet been discovered.

### Simulation-based design optimization

In the longer term, the tools I've developed and those I plan to research not only enable simulations with previously-inaccessible levels of detail and high accuracy for scientific discovery, but also significantly reduce the runtime of currently feasible simulations.  This opens the door to the automated design and optimization of systems where the objective function evaluation involves simulations of fluid flow and even chemical reaction. For example, optimizing the geometry of a flow device or airfoil---or even a combustor. I plan to research in this area, building upon my work with GPU acceleration of turbulent, reacting flows with spray models.

References
----------

[^1]: Kyle E Niemeyer, Chih-Jen Sung, and Mandhapati P Raju. Skeletal mechanism generation for surrogate fuels using directed relation graph with error propagation and sensitivity analysis. *Combust. Flame*, 157(9):1760--1770, 2010. doi:[10.1016/j.combustflflame.2009.12.022](http://dx.doi.org/10.1016/j.combustflflame.2009.12.022).
[^2]: Harun M Ismail, Hoon K Ng, Suyin Gan, Tommaso Lucchini, and Angelo Onorati. Development of a reduced biodiesel combustion kinetics mechanism for CFD modelling of a light-duty diesel engine. *Fuel*, 2012, in press. doi:[10.1016/j.fuel.2012.10.015](http://dx.doi.org/10.1016/j.fuel.2012.10.015).
[^3]: Kyle E Niemeyer and Chih-Jen Sung. On the importance of graph search algorithms for DRGEP-based mechanism reduction methods. *Combust. Flame*, 158(8):1439--1443, 2011. doi:[10.1016/j.combustflflame.2010.12.010](http://dx.doi.org/10.1016/j.combustflflame.2010.12.010).
[^4]: Kyle E Niemeyer, Chih-Jen Sung, Catalin G Fotache, and Jeremiah C Lee. Turbulence-chemistry closure method using graphics processing units: a preliminary test. In *7th Fall Technical Meeting of the Eastern States Section of the Combustion Institute*, Storrs, Connecticut, October 2011.
[^5]: Kyle E Niemeyer and Chih-Jen Sung Recent progress and challenges in exploiting graphics processors in computational fluid dynamics. In preparation, 2012.
[^6]: DOE Basic Energy Sciences. BES Funding Opportunities: Predicting Theory and Modeling. [http://science.energy.gov/bes/funding-opportunities/predictive-theory-and-modeling/](http://science.energy.gov/bes/funding-opportunities/predictive-theory-and-modeling/), November 2012.
[^7]: Army Research Laboratory. Core Broad Agency Announcement for Basic and Applied Scientific Research for Fiscal Years 2012 through 2017. Solicitation number W911NF-12-R-011, May 2012.
[^8]: Air Force Office of Scientific Research. Research interests of the Air Force Office of Scientific Research. Funding opportunity number BAA-AFOSR-2012-0001, March 2012.
[^9]: Christopher J Rutland. Large-eddy simulations for internal combustion engines - a review. *International Journal of Engine Research*, 12(5):421--451, 2011.
[^10]: Shijin Shuai, Neerav Abani, Takeshi Yoshikawa, Rolf D Reitz, and Sung Wook Park. Simulating low temperature diesel combustion with improved spray models. *International Journal of Thermal Sciences*, 48(9):1786--1799, 2009.
[^11]: Olivier Desjardins, Vincent Moureau, and Heinz Pitsch An accurate conservative level set/ghost fluid method for simulating turbulent atomization. *Journal of Computational Physics*, 227(18):8395--8416, 2008.
[^12]: Guillem Pratx and Lei Xing. GPU computing in medical physics: A review. *Medical Physics*, 38(5):2685--2697, 2011.
[^13]: Roberto Olivares-Amaya, Mark A Watson, Richard G Edgar, Leslie Vogt, Yihan Shao, and Alán Aspuru-Guzik. Accelerating correlated quantum chemistry calculations using graphical processing units and a mixed precision matrix multiplication library. *Journal of Chemical Theory and Computation*, 6(1):135--144, 2010.
[^14]: Gilles Pagès and Benedikt Wilbertz. GPGPUs in computational finance: massive parallel computing for American style options. *Concurrency and Computation: Practice and Experience*, 24(8):837--848, 2012.
