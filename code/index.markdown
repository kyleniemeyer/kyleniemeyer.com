---
layout: name
section: Code
title: Code
---

Code
====
Here you can download some code I’m releasing open source.  I can’t release 
all of the primary code I work on for research due to restrictions on some of the 
components (at this time), but other smaller programs that I wrote as tools 
I’m free to share.  If you use anything and find it helpful, or if you find 
a bug or just make improvements, please let me know!

<div class="section" markdown="1">
Tools
=====

**[vol-to-mole](https://github.com/kyleniemeyer/vol-to-mole)**  
Many multicomponent fuel mixtures are described using liquid volume percentage; this 
needs to be converted to mole fraction to be used in chemical kinetics software. 
This little program takes species and volume fraction and converts it to mole 
fractions, and calculates the mole fractions of the products and species.

**[mech_irrev](https://github.com/kyleniemeyer/irrev_mech)**  
This is a Python utility for converting Chemkin-format reaction mechanisms with 
reversible reactions into irreversible-only mechanisms.

**[VODE_F90](http://www.radford.edu/thompson/vodef90web/index.html)**  
I modified the great VODE_F90 code to be compatible with [OpenMP](http://openmp.org/wp/),
so that simultaneous integrations can be performed at the same time. Contact me if 
you have more questions about how you can use it.

</div>

<div class="section" markdown="1">
Research
========

**[create_rate_subs](https://github.com/kyleniemeyer/create_rate_subs)**  
This Python tool creates C and CUDA species and reaction rate subroutines 
from a Chemkin-style reaction mechanism. If used, please cite my paper: K.E. Niemeyer and C.J. Sung, “Accelerating moderately stiff chemical kinetics in reactive-flow simulations using GPUs,” *J. Comput. Phys.* 256 (2014):854--871. [doi:10.1016/j.jcp.2013.09.025](http://dx.doi.org/10.1016/j.jcp.2013.09.025).

**[lid-driven-cavity_gpu](https://github.com/kyleniemeyer/lid-driven-cavity_gpu)**  
This code solves the classic lid-driven cavity problem using the finite difference method, with both C and CUDA versions. I implemented various GPU optimization strategies to show the potential acceleration in this paper: K.E. Niemeyer and C.J. Sung, “Recent progress and challenges in exploiting graphics processors in computational fluid dynamics,” *J. Supercomput.* 67 (2014):528--564. [doi:10.1007/s11227-013-1015-7](http://dx.doi.org/10.1007/s11227-013-1015-7).

**[cf_expm](https://github.com/kyleniemeyer/cf_expm)**  
Calculates the terms needed for a rational function (partial fraction) 
approximation to the matrix exponential, using the Carathéodory-Fejér 
method. It is based on the Matlab code in L.N. Trefethen, J.A.C. Weideman, 
T. Schmelzer, “Talbot quadratures and rational approximations,” *BIT Numer. 
Math.* 46 (2006) 653--670. [doi:10.1007/s10543-006-0077-9](http://dx.doi.org/10.1007/s10543-006-0077-9).

</div>
