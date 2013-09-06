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

**Volume percent to mole fraction converter** \{ [zip](/files/vol2mole_v1.1.zip) \}  
Many multicomponent fuel mixtures are described using liquid volume percentage; this 
needs to be converted to mole fraction to be used in chemical kinetics software. 
This little program takes species and volume fraction and converts it to mole 
fractions, and calculates the mole fractions of the products and species.

**[mech_irrev](https://github.com/kyleniemeyer/irrev_mech)**  
This is a Python utility for converting Chemkin-format reaction mechanisms with 
reversible reactions into irreversible-only mechanisms.

</div>

<div class="section" markdown="1">
Research
========

**[cf_expm](https://github.com/kyleniemeyer/cf_expm)**  
Calculates the terms needed for a rational function (partial fraction) 
approximation to the matrix exponential, using the Carathéodory-Fejér 
method. It is based on the Matlab code in L.N. Trefethen, J.A.C. Weideman, 
T. Schmelzer, “Talbot quadratures and rational approximations,” BIT Numer. 
Math. 46 (2006) 653--670. [doi:10.1007/s10543-006-0077-9](http://dx.doi.org/10.1007/s10543-006-0077-9).

</div>
