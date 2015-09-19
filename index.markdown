---
layout: name
title: Home
section: Home
---

Welcome
=======

<img class='inset right' src='/images/kyle-niemeyer-web.jpg' title='Kyle Niemeyer' width='180px' />

I'm Kyle Niemeyer, an Assitant Professor of mechanical engineering in the [School of Mechanical, Industrial, and Manufacturing Engineering](http://mime.oregonstate.edu) at [Oregon State University](http://oregonstate.edu/).  


My research interests generally focus on computational modeling of multi-physics fluid flows relevant to applications in aerospace, transportation, and energy systems. My specific expertise is mainly in reacting flows, and more recently in fluid-structure interaction.  

You can find out more about me by poking around the links above and below.  

<div class="section">
Contact
========

The easiest way to contact me is via email:  
<Kyle.Niemeyer@oregonstate.edu>  

Alternatively, try my office:  
541-737-5614  
320 Rogers Hall  
Oregon State University  
Corvallis, OR, 97331

</div>

<div class="section">
Research
========

My [research](/research) focuses on developing methods to ease the integration of detailed and accurate chemistry in combustion modeling. Some of the strategies I've explored include chemical mechanism simplification and the use of graphics hardware (GPU computing) to accelerate reactive flow calculations. I'm also interested in developing new numerical methods that will allow us to better simulate important physical phenomena, including combustion,  turbulence-chemistry interactions, and the interaction of fluids with solid structures.  

See my [publications](/research/pubs) page for my journal and conference papers, as well as my master's thesis and doctoral dissertation.  

</div>

<div class="section">
Science <br/> Writing
===============

Since June 2011 (but not as much recently), I also work in my spare time (ha!) as a [science contributor][kylears] at [Ars Technica][ars], where I've reported on scientific articles covering a range of topics (e.g., energy, climate, technology) to a technically but not necessarily scientifically literate audience, with audiences of in the tens of thousands each month.

Here are some of my favorite and popular pieces:

- ["The US Navy wants great (rotating, detonating) balls of fire!"](http://arstechnica.com/science/2012/11/the-us-navy-wants-great-rotating-detonating-balls-of-fire/)
- ["The road ahead: How we'll get to 54.5 mpg by 2025"](http://arstechnica.com/features/2012/10/the-road-ahead-how-well-get-to-54-5-mpg-by-2025/)
- ["Mosquitos survive collisions with objects 50 times their weight: raindrops"](http://arstechnica.com/science/2012/06/mosquitos-survive-collisions-with-objects-50-times-their-weight-raindrops/)
- ["Why you should read the book _Before the Lights Go Out_"](http://arstechnica.com/science/2012/04/why-you-should-read-the-book-before-the-lights-go-out/)
- ["Chain reaction: the (slow) revival of US nuclear power"](http://arstechnica.com/science/2012/03/chain-reaction-the-slow-revival-of-us-nuclear-power/)
- ["The spice must flow: new model describes the evolution of desert dunes"](http://arstechnica.com/science/2012/02/the-spice-must-flow-describing-the-evolution-of-desert-dunes/)
- ["What makes the fuel go boom? Turbulence!"](http://arstechnica.com/science/2011/07/what-makes-the-fuel-go-boom-turbulence/)

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

[kylears]: http://arstechnica.com/author/kyle-niemeyer/
[ars]: http://arstechnica.com/