---
layout: name
title: Home
section: Home
---

Kyle Niemeyer
=============

<img class='inset right img-circle' src='/images/kyle-niemeyer-web.jpg' title='Kyle Niemeyer' width='180px' />

**Assistant Professor** of Mechanical Engineering  
[School of MIME](http://mime.oregonstate.edu)  
[Oregon State University](http://oregonstate.edu/)  
320 Rogers Hall  
Corvallis, OR 97331  

<div class="section">
Contact
=======
{% icon fa-envelope-o fa-fw%} <Kyle.Niemeyer@oregonstate.edu>  
{% icon fa-phone fa-fw%} 541-737-7498  
{% icon fa-twitter fa-fw%} [@kyle_niemeyer](https://twitter.com/kyle_niemeyer)  
{% icon fa-github fa-fw%} [kyleniemeyer](https://github.com/kyleniemeyer)  
{% icon fa-linkedin fa-fw%} [kyleniemeyer](https://www.linkedin.com/in/kyleniemeyer) 

</div>


<div class="section">
Research
========

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

</div>

<div class="section">
Join Us!
========

I am currently recruiting PhD students with interests in computational modeling and numerical methods for fluid dynamics and combustion. Competitive candidates will possess strong computer programming skills and experience in command-line/UNIX systems and parallel computing. You can see more about my [primary research areas](/research), but I'm also open to other related areas.  

Information about applying to the School of MIME's graduate program can be found [here](http://mime.oregonstate.edu/school-mime-graduate-school-admissions-faq). Note that the yearly deadline to be considered is **January 15**.  

I am also happy to talk to postdoctoral candidates, and undergraduate students interested in research are always welcome.  

</div>

<div class="section">
Teaching
========

**Mechanical Engineering Methods** (ME 373): Winter 2015, 2016  

**Introduction to Fluid Mechanics** (ME 331): Fall 2013, 2014  

**Introduction to MIME** (MIME 101): Fall 2015  

</div>

<div class="section">
Blog
=====
I keep a [blog](/blog/) on personal and research topics. Here are some recent posts:

<ul class="compact recent">
  {% for post in site.categories.blog limit:3 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date_to_string }}</span>
  </li>
  {% endfor %}
</ul>
</div>

<div class="section">
[Reading](http://www.goodreads.com/kyleniemeyer)
==============================================

<style type="text/css" media="screen">
  .gr_grid_container { /* customize grid container div here. eg: width: 500px; */ }
  .gr_grid_book_container {
    /* customize book cover container div here */
    float: left;
    width: 98px;
    height: 160px;
    padding: 0px 0px;
    overflow: hidden;
  }
</style>
<script type="text/javascript" charset="utf-8" src="https://www.goodreads.com/review/grid_widget/1983734?cover_size=medium&amp;hide_link=&amp;hide_title=true&amp;num_books=20&amp;order=a&amp;shelf=currently-reading&amp;sort=date_added&amp;widget_id=1429216460"> </script>

</div>

<div class="section">
Science <br/> Writing
===============

From 2011 to 2013, I also [contributed][kylears] in my spare time (ha!) to [The Scientific Method](http://arstechnica.com/science/), the science section of [Ars Technica][ars], where I reported on scientific articles covering a range of topics (e.g., energy, climate, technology) to a technically---but not necessarily scientifically---literate audience, with audiences in the tens of thousands each month.

Here are some of my favorite and popular pieces:

- ["The US Navy wants great (rotating, detonating) balls of fire!"](http://arstechnica.com/science/2012/11/the-us-navy-wants-great-rotating-detonating-balls-of-fire/)
- ["The road ahead: How we'll get to 54.5 mpg by 2025"](http://arstechnica.com/features/2012/10/the-road-ahead-how-well-get-to-54-5-mpg-by-2025/)
- ["Mosquitos survive collisions with objects 50 times their weight: raindrops"](http://arstechnica.com/science/2012/06/mosquitos-survive-collisions-with-objects-50-times-their-weight-raindrops/)
- ["Why you should read the book _Before the Lights Go Out_"](http://arstechnica.com/science/2012/04/why-you-should-read-the-book-before-the-lights-go-out/)
- ["Chain reaction: the (slow) revival of US nuclear power"](http://arstechnica.com/science/2012/03/chain-reaction-the-slow-revival-of-us-nuclear-power/)
- ["The spice must flow: new model describes the evolution of desert dunes"](http://arstechnica.com/science/2012/02/the-spice-must-flow-describing-the-evolution-of-desert-dunes/)
- ["What makes the fuel go boom? Turbulence!"](http://arstechnica.com/science/2011/07/what-makes-the-fuel-go-boom-turbulence/)

</div>

[kylears]: http://arstechnica.com/author/kyle-niemeyer/
[ars]: http://arstechnica.com/
