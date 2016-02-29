---
layout: blog-post
title: gfortran intrinsic function MAXLOC
tags: [programming, Fortran]
---

While writing some new code for my research, I ran into an unexpected result using the `MAXLOC` intrinsic function with GNU Fortran [^foot].  Well, it wouldn’t be unexpected if I read the online manual entry more carefully, but who does?

`MAXLOC` returns the location of the element in an array with the maximum value.  Simple enough, right? Well, if you are considering a one-dimensional array, then it doesn’t return an integer scalar, but a rank zero integer array. This needs to be declared using something like

`integer, dimension(1) :: i`

rather than a standard scalar integer, and when looking for the actual element location

`i = MAXLOC (array)`  
`i(1)`

This is simple enough, but confused me for a couple minutes before I figured out the problem.

[^foot]: I know, I know… who still uses Fortran?  Well, I do, for one.  A ton of legacy code that still works fine (and is actually faster) is written in Fortran, so it’s easier in general to continue to use it.  The GNU Compiler Collection makes it easier to combine Fortran and C++, which I’ve begun to do in some cases (genetic algorithms, for one), but the bulk of my work is in Fortran.
