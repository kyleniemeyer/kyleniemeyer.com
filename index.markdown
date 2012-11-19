---
layout: name
title: Home

section: Home
---

<img class='inset right' src='/images/cropped-kyle-niemeyer.jpg' title='Kyle Niemeyer' alt='Photo of Kyle Niemeyer hiking in the Rocky Mountains' width='120px' />

Welcome
=======

I'm Kyle Niemeyer, a PhD student studying combustion modeling, [science contributor](http://arstechnica.com/author/kyle-niemeyer/) for [Ars Technica](http://arstechnica.com/), husband---not necessarily in that order. 
You can find out more about me by poking around the links above and below.  

+--	{.section}
Research
========

My day job is as a [PhD candidate](/work) in mechanical engineering at [Case Western Reserve University](http://case.edu/). My advisor is [Professor 
Chih-Jen (Jackie) Sung](http://www.engr.uconn.edu/me/cms/people/87-chihsung) 
of the University of Connecticut, who runs the [Combustion Diagnostics Laboratory](http://combdiaglab.engr.uconn.edu/) there.

My current research goal is the integration of detailed and accurate chemistry 
in combustion modeling. Some of the strategies I'm exploring include chemical mechanism simplification and the use of graphics hardware (GPU computing) to accelerate reactive flow calculations.

See my [publications](/work/pubs) page for my journal and conference papers, as well as my master's thesis.

I'm hoping to graduate in May 2013, and will be seeking a post-doc or full-time faculty position.
=--

+-- {.section}
Science Writing
===============

Since June 2011, I also work in my spare time (ha!) as a [science
contributor][kylears] at [Ars Technica][ars], where I've reported on scientific articles covering a range of topics (e.g., energy, climate, technology) to a technically but not necessarily scientifically literate audience, with audiences of in the tens of thousands each month.

Here are some of my favorite and popular pieces:

- ["The US Navy wants great (rotating, detonating) balls of fire!"](http://arstechnica.com/science/2012/11/the-us-navy-wants-great-rotating-detonating-balls-of-fire/)
- ["The road ahead: How we'll get to 54.5 mpg by 2025"](http://arstechnica.com/features/2012/10/the-road-ahead-how-well-get-to-54-5-mpg-by-2025/)
- ["Mosquitos survive collisions with objects 50 times their weight: raindrops"](http://arstechnica.com/science/2012/06/mosquitos-survive-collisions-with-objects-50-times-their-weight-raindrops/)
- ["Why you should read the book _Before the Lights Go Out_"](http://arstechnica.com/science/2012/04/why-you-should-read-the-book-before-the-lights-go-out/)
- ["Chain reaction: the (slow) revival of US nuclear power"](http://arstechnica.com/science/2012/03/chain-reaction-the-slow-revival-of-us-nuclear-power/)
- ["The spice must flow: new model describes the evolution of desert dunes"](http://arstechnica.com/science/2012/02/the-spice-must-flow-describing-the-evolution-of-desert-dunes/)
- ["What makes the fuel go boom? Turbulence!"](http://arstechnica.com/science/2011/07/what-makes-the-fuel-go-boom-turbulence/)

=--

+-- {.section}
Blog
=====
I keep a [blog](/blog/) on personal and research topics.
{% for post in site.categories.blog limit:3 %}
<ul class="compact recent">
<li>
	<a href="{{ post.url }}" title="{{ post.excerpt }}">{{ post.title }}</a>
	<span class="date">{{ post.date | date_to_string }}</span> 
</li>
</ul>
{% endfor %}
=--

+-- {.section}
[Reading](http://www.goodreads.com/kyleniemeyer)
==============================================

<style type="text/css" media="screen">
.gr_grid_container { /* customize grid container div here. eg: width: 500px; */ } 
  .gr_grid_book_container { /* customize book cover container div here */ 
    float: left; 
    width: 39px; 
    height: 60px; 
    padding: 0px 0px;
    overflow: hidden;
  }
</style>
<script type="text/javascript" src="http://www.goodreads.com/review/grid_widget/1983734.Kyle's%20currently-reading%20book%20list?cover_size=small&hide_link=&hide_title=true&num_books=10&order=a&shelf=currently-reading&sort=date_added&widget_id=1349672197" charset="utf-8"> </script>

=--

+-- {.section}
[Twitter](http://twitter.com/kyle_niemeyer)
====================================

<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/kyle_niemeyer" data-widget-id="255170883625291776">Tweets by @kyle_niemeyer</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>


=--

[kylears]: http://arstechnica.com/author/kyle-niemeyer/
[ars]: http://arstechnica.com/