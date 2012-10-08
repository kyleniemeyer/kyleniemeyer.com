--- 
layout: blog-post
title: Combustion article for Ars Technica
---

This is a couple days old now, but I wrote a combustion-related article for [Ars Technica](http://arstechnica.com/). I haven’t been posting every article I write here (since there are usually one or two a week), but this is the first so far to be specifically related to my research–so I figured it deserved special comment.

The article is [“What makes the fuel go boom? Turbulence!”](http://arstechnica.com/science/news/2011/07/what-makes-the-fuel-go-boom-turbulence.ars), and it covers a [recent paper](http://dx.doi.org/10.1103/PhysRevLett.107.054501) published in _Physical Review Letters_ on detonation-to-deflagration transition, based on direct numerical simulation (DNS) results (read it for the full details!). Basically, until now the cause of the transition in unconfined situations hasn’t been clear, but the results show that a runaway feedback loop initially started by turbulent heating is the root cause.

The next steps include adding in more detailed chemisty–which is where my current interests lie. The paper mentioned here only uses a single reaction step: fuel (hydrogen) + oxidizer (air) -> water (+ inert nitrogen from the air). In order to produce more realistic results and predictions, much more detailed description of the actual fuel breakdown is needed.

This is particularly difficult for DNS, however, since the transport calculations (no chemistry) are expensive enough. One way to do this is to generate a small, reduced mechanism that includes some detail (species, reactions) but not the full amount–enough to get your results with acceptable accuracy within a reasonable amount of time. This is where my previous research has focused.

Another approach, the one I am working on now, is to calculate the chemistry terms differently, faster than the traditional methods, such as using graphical processing units (GPUs) to do it in parallel. More to come on this soon...
