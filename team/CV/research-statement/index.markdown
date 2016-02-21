---
layout: page
title: Research Statement
section: CV
top: Kyle Niemeyer
---

<div class="section">
Download the most recent version of my research statement here: \{[pdf](https://www.dropbox.com/s/u3v0o0o0x9oy1rd/kyle-niemeyer-research-statement.pdf?dl=0)\}
</div>

Research Statement
==================

My overall research goals are to enable the use of accurate physical models in high-fidelity reactive-flow simulations, and, building on these efforts, use the resulting techniques to study turbulence-chemistry interaction in combustion systems. In order to design the next generation of clean, efficient vehicle engines and power plant combustors, engineers need the next generation of computational simulation tools. Furthermore, understanding the science behind the phenomena in such systems requires advances in numerical methods. The complex, multi-scale physical phenomena present in such systems---including turbulence and chemical reaction---necessitate more accurate and physically realistic models for reliable prediction. Of course, with greater detail and accuracy comes increased computational expense; such models are typically too costly to use in practical simulations. My work to date focused on developing strategies to reduce the cost of finite-rate chemical kinetics in  combustion simulations through reaction mechanism reduction and acceleration by graphics processing units (GPUs). In the longer term, I plan to build on these efforts by spanning my research to applications where turbulent mixing plays a strong role in controlling combustion, such as cycle-to-cycle variation in internal combustion engines and lean premixed combustion strategies in gas turbine combustors.

Past Research
----------------

### Reaction mechanism reduction

One major challenge of incorporating accurate, detailed chemistry in reactive-flow simulations is the large size of the reaction mechanisms, particularly for liquid transportation fuels. I developed a new method for reducing the size of such detailed mechanisms while retaining enough complexity in order to accurately capture important species and predict global phenomena such as ignition and extinction[^1]. This approach combined a graph-theory-based algorithm with sensitivity analysis, and worked more effectively than previously demonstrated methods. My reduction software has since been adopted by other groups internationally[^2][^3][^4]. Following this initial work, I coauthored a paper[^3] showing the importance of employing the proper graph search algorithm in the above and related methods, and also demonstrated a search algorithm that not only reliably gives the correct results but also performs two orders of magnitude faster than previously employed algorithms.

More recently, I studied the behavior of my mechanism reduction approach for multi-component surrogate fuels, and made recommendations for successful strategies[^6]. One important result out of this study was that combining separate reduced mechanisms for neat fuels could  overlook important interactions between the fuels when blended, and so reduction should be performed on the multi-component surrogate. However, while demonstrating significant reduction in mechanism size, I found that maintaining acceptable predictiveness for multi-component surrogates required large final mechanism sizes---too large for use in practical combustion simulations. This suggests the need for dynamic or on-the-fly mechanism reduction in such cases.

### GPU acceleration of reactive-flow simulations

Even with smaller mechanism sizes, the evaluation of detailed chemistry terms can dominate the computational cost of reactive-flow simulations. One way to reduce this is to exploit the high performance of massively parallel GPUs. I developed GPU-based approaches for explicit integration of non-stiff and moderately stiff chemical kinetics and demonstrated them using a range of detailed reaction mechanisms for fuels including hydrogen, hydrogen\carbon monoxide, natural gas, and ethylene, showing performance improvements of up to two orders of magnitude compared to equivalent methods[^7]. However, in this work I found that the GPU-based algorithm performed worse compared to typical CPU-based implicit algorithms as the stiffness became more severe, suggesting the need for new techniques for GPU acceleration of stiff chemistry.

In addition, I recently coauthored a review on progress in exploiting GPUs to accelerate simulations of both nonreactive and reactive flows[^8]. In it, I gave recommendations for best-use strategies and presented case studies of heat conduction in a plate and lid-driven flow in a cavity that demonstrated the potential improvement in performance with even simple codes.

Planned Research Program
------------------------

My primary research goals are to develop algorithms and strategies for including more accurate physical models in practical simulations of combustion and reactive flows, then to utilize these new capabilities to study turbulence-chemistry interaction. This will build and expand upon my previous work in developing methods to reduce the cost of chemical models in such simulations. A number of funding agencies are interested in projects in these areas, including the DOE's Basic Energy Sciences division, the Army Research Laboratory, and the Air Force Office of Scientific Research. All three are interested in advancing computational methods for complex reacting systems, and in particular reducing the expense of predictive, high-fidelity numerical methods. In addition, I am pursuing funding from NSF programs including CBET Combustion and Fire Systems and ACI Software Infrastructure for Sustained Innovation.

### Dynamic mechanism reduction

As demonstrated by my previous work in mechanism reduction, the ever-increasing size of detailed mechanisms and the growing complexity of multi-component surrogate fuels pose major challenges for typical mechanism reduction, requiring sizes for accuracy that are prohibitively large for use in practical simulations. Dynamic or on-the-fly mechanism reduction is a potential solution, where local conditions are used to perform a locally specific reduction akin to adaptive mesh refinement---building on initial efforts in this area[^9], I plan to develop more sophisticated dynamic reduction strategies. One major limitation of prior efforts in this direction has been a lack of strict, a priori error control---while improvements in performance have been demonstrated, there is no guarantee on accuracy. This is particularly an issue in high-fidelity reactive-flow simulations where turbulence-chemistry interaction plays a strong role because reducing the complexity of chemistry for the sake of performance could result in large overall errors.

### GPU acceleration of turbulent combustion modeling

From automotive and aircraft engines to forest fires, nearly all real-world reacting flows of engineering and scientific interest are turbulent, so practical simulations of combustion require modeling of turbulence in addition to chemical reactions. Such simulations are further complicated by the need to model the complex relationship between turbulence and chemistry. I plan to extend my work on methods reducing the cost of chemistry, both on the mechanism reduction side as well as GPU acceleration, to the turbulence-chemistry interaction models needed in simulations of turbulent combustion. This will not only allow the greater use and improvement of existing models such as the transported probability density function---which has been used sparingly in high-fidelity simulations of automotive engines due to the high computational cost---but also the development of new models.

### Studying turbulence-chemistry interaction

My long-term interests involve building on my efforts in the above two areas by using the developed techniques and strategies to better understand the interaction between turbulence and chemistry in systems where each plays a strong role.  In particular, I am interested in better understanding the effects of cycle-to-cycle variation in internal combustion engines, which can lead to unpredictable, undesirable stochastic events such as knock and misfire---with better understanding comes the ability to reduce or eliminate such variations. Recognizing that new models cannot stand alone, I also plan to collaborate with experimentalists on these efforts for validation of computational results and models, initially using canonical literature flames (e.g., Sandia D).

References
----------

[^1]: Kyle E Niemeyer, Chih-Jen Sung, and Mandhapati P Raju. Skeletal mechanism generation for surrogate fuels using directed relation graph with error propagation and sensitivity analysis. *Combust. Flame* 157(9):1760--1770, 2010. doi:[10.1016/j.combustflame.2009.12.022](http://dx.doi.org/10.1016/j.combustflame.2009.12.022).
[^2]: Harun M Ismail, Hoon K Ng, Suyin Gan, Tommaso Lucchini, and Angelo Onorati. Development of a reduced biodiesel combustion kinetics mechanism for CFD modelling of a light-duty diesel engine. *Fuel* 106:388--600, 2013. doi:[10.1016/j.fuel.2012.10.015](http://dx.doi.org/10.1016/j.fuel.2012.10.015).
[^3]: Meghdad Saffaripour, Armin Veshkini, Mohammadreza Kholghy, and Murray J Thomson. Experimental investigation and detailed modeling of soot aggregate formation and size distribution in laminar coflow diffusion flames of Jet A-1, a synthetic kerosene, and n-decane. *Combust. Flame* 161:848--863, 2014. doi:[10.1016/j.combustflame.2013.10.016](http://dx.doi.org/10.1016/j.combustflame.2013.10.016).
[^4]: Fengquan Zhong, Sugang Ma, Xinyu Zhang, Chih-Jen Sung, Kyle E Niemeyer. Development of Efficient and Accurate Skeletal Mechanisms for Hydrocarbon Fuels and Kerosene Surrogate. *Acta Mech. Sinica*, in press. doi:[10.1007/s10409-015-0434-5](http://dx.doi.org/10.1007/s10409-015-0434-5).
[^5]: Kyle E Niemeyer and Chih-Jen Sung. On the importance of graph search algorithms for DRGEP-based mechanism reduction methods. *Combust. Flame* 158(8):1439--1443, 2011. doi:[10.1016/j.combustflflame.2010.12.010](http://dx.doi.org/10.1016/j.combustflflame.2010.12.010).
[^6]: Kyle E Niemeyer and Chih-Jen Sung. Mechanism reduction for multicomponent surrogates: a case study using toluene reference fuels. *Combust. Flame* 161(11):2752--2764, 2014. doi:[10.1016/j.combustflame.2014.05.001](http://dx.doi.org/10.1016/j.combustflame.2014.05.001).
[^7]: Kyle E Niemeyer and Chih-Jen Sung. Accelerating moderately stiff chemical kinetics in reactive-flow simulations using GPUs. *J. Comput. Phys.* 256:854--871, 2014. doi:[10.1016/j.jcp.2013.09.025](http://dx.doi.org/10.1016/j.jcp.2013.09.025).
[^8]: Kyle E Niemeyer and Chih-Jen Sung. Recent progress and challenges in exploiting graphics processors in computational fluid dynamics. *J. Supercomput.* 67(2):528--564. doi:[10.1007/s11227-013-1015-7](http://dx.doi.org/10.1007/s11227-013-1015-7).
[^9]: Nicholas J Curtis, Kyle E Niemeyer, and Chih-Jen Sung. An automated target species selection method for dynamic adaptive chemistry simulations. *Combust. Flame* in press, 2014. doi:[10.1016/j.combustflame.2014.11.004](http://dx.doi.org/10.1016/j.combustflame.2014.11.004).
