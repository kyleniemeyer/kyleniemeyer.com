---
layout: default
title: Niemeyer Research Group
section: Home
---

<div class="row">
<div class="col-md-6">

My group's [research](/research) focuses on developing new numerical methods that will allow us to better simulate important physical phenomena, including combustion, turbulence-chemistry interactions, and the interaction of fluids with solid structures.  

Some recent and ongoing projects include:

 * Strategies for chemical kinetic model reduction
 * Algorithms that can exploit graphics processing units (GPUs) to accelerate reactive-flow simulations
 * A software library for the adaptive and efficient solution of chemical kinetics
 * GPU-based swept time-space decomposition scheme for accelerating parallel CFD simulations
 * Computational modeling of coupled detonation-magnetohydrodynamic systems for power generation
 * Computational investigation of vacuum arc remelting (VAR) furnaces
 * Development of efficient solvers for fluid-structure interaction

See our [research page](/research) for more details.

</div> <!-- END col-md-6-->
<div class="col-md-4" style="font-size:20px; text-align:center;">

<img class='inset right img-circle' src='/assets/img/kyle-niemeyer-web.jpg' title='Kyle Niemeyer' alt='Photo of Kyle Niemeyer' width='180px' />  

Kyle Niemeyer  
**Assistant Professor**  
Mechanical Engineering  
[School of MIME](http://mime.oregonstate.edu)  
[Oregon State University](http://oregonstate.edu/)

</div> <!-- END col-md-4-->
</div> <!-- END row-->

## Contact

<div class="row" markdown="0">
<div class="col-md-6">
<dl class="dl-horizontal dl-horizontal-info">
<dt><i class="fa fa-envelope-o fa-fw"></i> Email:</dt>
<dd><script type="text/javascript" src="/assets/js/obfuscate-email.js"></script></dd>
<dt><i class="fa fa-key fa-fw"></i>  Public key:</dt>
<dd><a href="https://keybase.io/kyleniemeyer">C654 D13A C6F9 EDA8</a></dd>
<dt><i class="fa fa-phone fa-fw"></i> Office:</dt>
<dd>541-737-5614</dd>
<dt><i class="fa fa-twitter fa-fw"></i> Twitter:</dt>
<dd><a href="https://twitter.com/kyleniemeyer">@kyleniemeyer</a></dd>
<dt><i class="fa fa-github fa-fw"></i> GitHub:</dt>
<dd><a href="https://github.com/kyleniemeyer">kyleniemeyer</a></dd>
<dt><i class="fa fa-linkedin fa-fw"></i> LinkedIn:</dt>
<dd><a href="https://www.linkedin.com/in/kyleniemeyer">kyleniemeyer</a></dd>
<dt><i class="fa fa-building fa-fw"></i> Address:</dt>
<dd><address>
<a href="https://www.google.com/maps/place/OSU+School+of+Mechanical,+Industrial,+and+Manufacturing/@44.5675738,-123.277663,17z/data=!3m1!4b1!4m2!3m1!1s0x54c040bdc9746961:0x79d039cd19351b81">320 Rogers Hall</a><br/>
Corvallis, OR 97331-6001
</address></dd>
</dl>
</div> <!-- END col-md-6-->
<div class="col-md-4" style="font-size:20px; text-align:center;">

<a href="https://impactstory.org/KyleNiemeyer"><img class="inset right" src="https://impactstory.org/logo/small" alt="Impactstory logo" width="200"/></a>

</div> <!-- END col-md-4-->
</div> <!-- END row-->

## Join Us!

I am currently recruiting PhD students with interests in computational modeling and numerical methods for fluid dynamics and combustion. Competitive candidates will possess strong computer programming skills and experience in command-line/UNIX systems and parallel computing. You can see more about my [primary research areas](/research), but I'm also open to other related areas.  

Information about applying to the School of MIME's graduate program can be found [here](http://mime.oregonstate.edu/school-mime-graduate-school-admissions-faq). Note that the yearly deadline to be considered is **January 15**.  

I am also happy to talk to postdoctoral candidates, and undergraduate students interested in research are always welcome.  

## Teaching

**Mechanical Engineering Methods** (ME 373): Winter 2015, 2016  

**Introduction to Fluid Mechanics** (ME 331): Fall 2013, 2014  

**Introduction to MIME** (MIME 101): Fall 2015  

## Blog

I keep a [blog](/blog/) on personal and research topics. Here are some recent posts:

<table class="table table-striped">
{% for post in site.categories.blog limit:5 %}
<tr><td>{{ post.date | date: "%-d %b %Y" }}</td>
<td><a href="{{ post.url }}">{{ post.title }}</a></td></tr>
{% endfor %}
</table>

## News

<table class="table table-striped">
<tr><td>20–22 April 2015</td>
<td>Attended and presented talk on using GPUs for chemical kinetics in combustion simulations at the <a href="http://www.nc15.ecp.fr/">15th International Conference on Numerical Combustion</a> in Avignon, France.
</td></tr>
<tr><td>11 April 2015</td>
<td>My <a href="http://dx.doi.org/10.1016/j.fuel.2015.04.010">paper</a> on a new fuel performance index for low-temperature combustion with Shane Daly, William Cannella, and <a href="http://mime.oregonstate.edu/people/hagen">Christopher Hagen</a> has been accepted for publication in <i>Fuel</i>.
</td></tr>
<tr><td>24–26 March 2015</td>
<td>Attended High Pressure High Reynolds Number Combustion workshop at KAUST in Saudi Arabia.
</td></tr>
<tr><td>20 January 2015</td>
<td>John Timmer of <a href="http://arstechnica.com/">Ars Technica</a> interviewed me for an <a href="http://arstechnica.com/science/2015/01/the-future-of-control-putting-virtual-wind-turbines-inside-real-ones/">article about modeling fluid flows</a>.
</td></tr>
<tr><td></td>
<td><a href="/research/news/">Older News →</a>
</td></tr>
</table>

## Writing

From 2011 to 2013, I also [contributed][kylears] in my spare time (ha!) to [Scientific Method](http://arstechnica.com/science/), the science section of [Ars Technica][ars], where I reported on scientific articles covering a range of topics (e.g., energy, climate, technology) to a technically---but not necessarily scientifically---literate audience, with audiences in the tens of thousands each month.

Here are some of my favorite and popular pieces:

<table class="table table-striped">
<tr><td>5 Nov 2012</td>
<td><a href="http://arstechnica.com/science/2012/11/the-us-navy-wants-great-rotating-detonating-balls-of-fire/">"The US Navy wants great (rotating, detonating) balls of fire!"</a></td></tr>
<tr><td>8 Oct 2012</td>
<td><a href="http://arstechnica.com/features/2012/10/the-road-ahead-how-well-get-to-54-5-mpg-by-2025/">"The road ahead: How we'll get to 54.5 mpg by 2025"</a></td></tr>
<tr><td>6 Jun 2012</td>
<td><a href="http://arstechnica.com/science/2012/06/mosquitos-survive-collisions-with-objects-50-times-their-weight-raindrops/">"Mosquitos survive collisions with objects 50 times their weight: raindrops"</a></td></tr>
<tr><td>7 Apr 2012</td>
<td><a href="http://arstechnica.com/science/2012/04/why-you-should-read-the-book-before-the-lights-go-out/">"Why you should read the book <i>Before the Lights Go Out</i>"</a></td></tr>
<tr><td>6 Mar 2012</td>
<td><a href="http://arstechnica.com/science/2012/03/chain-reaction-the-slow-revival-of-us-nuclear-power/">"Chain reaction: the (slow) revival of US nuclear power"</a></td></tr>
<tr><td>8 Feb 2012</td>
<td><a href="http://arstechnica.com/science/2012/02/the-spice-must-flow-describing-the-evolution-of-desert-dunes/">"The spice must flow: new model describes the evolution of desert dunes"</a></td></tr>
<tr><td>29 Jul 2011</td>
<td><a href="http://arstechnica.com/science/2011/07/what-makes-the-fuel-go-boom-turbulence/">"What makes the fuel go boom? Turbulence!"</a></td></tr>
</table>

[kylears]: http://arstechnica.com/author/kyle-niemeyer/
[ars]:
