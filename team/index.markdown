---
layout: page
title: Team
section: Team
top: Niemeyer Research Group
members:
  - niemeyer:
    name:
      first: "Kyle"
      last: "Niemeyer"
    title: "Assistant Professor"
    homepage: "http://kyleniemeyer.com"
    email: "Kyle.Niemeyer@oregonstate.edu"
    phone: "541-737-7498"
    cv: "http://kyleniemeyer.com/team/CV"
    github: "kyleniemeyer"
    twitter: "kyle_niemeyer"
    orcid: "0000-0003-4425-7097"
    googlescholar: "http://scholar.google.com/citations?user=dt0KRYoAAAAJ"
    linkedin: "kyleniemeyer"
    researchgate: "Kyle_Niemeyer"
    photo: "kyle-niemeyer-web.jpg"
    details: >
        In my free time, I enjoy running and weightlifting, immersive video
        games, training in Muay Thai (Thai boxing), and discovering the
        Northwest's multitude of IPAs.
  - himakar:
    name:
      first: "Himakar"
      last: "Ganti"
    title: "PhD student"
    homepage: "http://kyleniemeyer.com/team/"
    email: "gantih@oregonstate.edu"
    github: "himakarganti"
    linkedin: "himakar-ganti-8ab319a"
  - fillo:
    name:
      first: "Aaron"
      last: "Fillo"
    photo: "fillo.jpg"
    title: "PhD candidate"
    homepage: "http://kyleniemeyer.com/team/"
    email: "filloa@oregonstate.edu"
    linkedin: "aaron-fillo-63789b94"
    researchgate: "Aaron_Fillo"
    interests: >
        Turbulent premixed combustion experiments and modeling.
    details: >
        Co-advised with [Prof. David Blunck](http://research.engr.oregonstate.edu/blunckgroup/). Recipient of the NSF Graduate Research Fellowship.
  - minar:
    name:
      first: "Christopher"
      last: "Minar"
    title: "MS student"
    homepage: "http://kyleniemeyer.com/team/"
    email: "minarc@oregonstate.edu"
    github: "chrisminar"
    linkedin: "christopherminar"
  - soler:
    name:
      first: "Miguel"
      last: "Soler"
    title: "MS student"
    homepage: "http://kyleniemeyer.com/team/"
    email: "solerm@oregonstate.edu"
    orcid: "0000-0003-1398-5171"
    github: "solerm"
    linkedin: "miguel-soler-5ba76066"
    photo: "soler-miguel.jpg"
  - brian:
    name:
      first: "Brian"
      last: "Butcher"
    title: "Undergraduate research assistant"
    homepage: "http://kyleniemeyer.com/team/"
    email: "butchebr@oregonstate.edu"
  - parker:
    name:
      first: "Parker"
      last: "Clayton"
    title: "Undergraduate research assistant"
    email: "claytonp@oregonstate.edu"
    homepage: "http://parkerclayton.net/"
    linkedin: "parkerdclayton"
alumni:
  - shane:
    name:
      first: "Shane"
      last: "Daly"
    title: "MS in Mechanical Engineering, Sept. 2015."
    email: "dalys@oregonstate.edu"
    homepage: "http://osucascades.edu/energy-systems-lab/people/student-researchers"
    details: >
        Co-advised with [Prof. Christopher Hagen](http://osucascades.edu/energy-systems-lab/dr-christopher-hagen).
---

{% for member in page.members %}

<div class="row">
<div class="col-md-4" about="{{member.homepage}}" style="text-align: center;">

<p>
{% if member.photo != nil %}
<img class="img-circle" src="/assets/img/{{member.photo}}" alt="Photo of {{member.name.first}}" width="150px"/>  
{% else %}
<i class="fa fa-user-secret fa-5x"></i>  
{% endif %}
<a href="{{member.homepage}}">{{member.name.first}} {{member.name.last}}</a>  
{{member.title}}  
{% comment %}{% icon fa-envelope-o fa-fw%} <{{member.email}}>  {% endcomment %}
{% if member.phone != nil %}
{% icon fa-phone fa-fw%} {{member.phone}}  
{% endif %}
<a href="mailto:{{member.email}}" title="email"><i class="fa fa-envelope"></i></a>
<span class="socialicons">
{% if member.cv != nil %}
<a type="application/atom+xml" href="{{member.cv}}" title="CV"><i class="fa fa-file-text"></i></a>
{% endif %}
{% if member.orcid != nil %}
<a rel="http://purl.org/spar/datacite/orcid" href="https://orcid.org/{{member.orcid}}" title="ORCID ID"><i class="ai ai-orcid"></i></a>
{% endif %}
{% if member.twitter != nil %}
<a href="https://twitter.com/{{member.twitter}}" title="Twitter"><i class="fa fa-twitter"></i></a>
{% endif %}
{% if member.github != nil %}
<a href="https://github.com/{{member.github}}" title="GitHub"><i class="fa fa-github"></i></a>
{% endif %}
{% if member.linkedin != nil %}
<a href="https://www.linkedin.com/in/{{member.linkedin}}" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
{% endif %}
{% if member.researchgate != nil %}
<a href="https://www.researchgate.net/profile/{{member.researchgate}}" title="ResearchGate"><i class="ai ai-researchgate"></i></a>
{% endif %}
{% if member.googlescholar != nil %}
<a type="application/atom+xml" href="{{member.googlescholar}}" title="Publications"><i class="ai ai-google-scholar"></i></a>
{% endif %}  

</span>
</p>

</div> <!-- END col-md-4-->
<div class="col-md-8">

{{member.interests}}

{{member.details}}

</div> <!-- END col-md-8-->
</div> <!-- END row-->

{% endfor %}


## Alumni

{% for member in page.alumni %}

<div class="row">
<div class="col-md-4" about="{{member.homepage}}" style="text-align: center;">

<p>
{% if member.photo != nil %}
<img class="img-circle" src="/assets/img/{{member.photo}}" alt="Photo of {{member.name.first}}" width="150px"/>  
{% else %}
<i class="fa fa-user-secret fa-5x"></i>  
{% endif %}
<a href="{{member.homepage}}">{{member.name.first}} {{member.name.last}}</a>  
{{member.title}}  
{% comment %}{% icon fa-envelope-o fa-fw%} <{{member.email}}>  {% endcomment %}
{% if member.phone != nil %}
{% icon fa-phone fa-fw%} {{member.phone}}  
{% endif %}
<a href="mailto:{{member.email}}" title="email"><i class="fa fa-envelope"></i></a>
<span class="socialicons">
{% if member.cv != nil %}
<a type="application/atom+xml" href="{{member.cv}}" title="CV"><i class="fa fa-file-text"></i></a>
{% endif %}
{% if member.orcid != nil %}
<a rel="http://purl.org/spar/datacite/orcid" href="https://orcid.org/{{member.orcid}}" title="ORCID ID"><i class="ai ai-orcid"></i></a>
{% endif %}
{% if member.twitter != nil %}
<a href="https://twitter.com/{{member.twitter}}" title="Twitter"><i class="fa fa-twitter"></i></a>
{% endif %}
{% if member.github != nil %}
<a href="https://github.com/{{member.github}}" title="GitHub"><i class="fa fa-github"></i></a>
{% endif %}
{% if member.linkedin != nil %}
<a href="https://www.linkedin.com/in/{{member.linkedin}}" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
{% endif %}
{% if member.researchgate != nil %}
<a href="https://www.researchgate.net/profile/{{member.researchgate}}" title="ResearchGate"><i class="ai ai-researchgate"></i></a>
{% endif %}
{% if member.googlescholar != nil %}
<a type="application/atom+xml" href="{{member.googlescholar}}" title="Publications"><i class="ai ai-google-scholar"></i></a>
{% endif %}  

</span>
</p>

</div> <!-- END col-md-4-->
<div class="col-md-8">

{{member.interests}}

{{member.details}}

</div> <!-- END col-md-8-->
</div> <!-- END row-->

{% endfor %}

## Collaborators

[Prof. Chih-Jen Sung](http://www.engr.uconn.edu/me/cms/people/9-people/people/87-chihsung)   
[Combustion Diagnostics Laboratory](http://combdiaglab.engr.uconn.edu/), University of Connecticut.

[Prof. Christopher Hagen](http://osucascades.edu/energy-systems-lab/dr-christopher-hagen)  
[Energy Systems Laboratory](http://osucascades.edu/energy-systems-lab/), Oregon State University

[Prof. David Blunck](http://research.engr.oregonstate.edu/blunckgroup/dr-david-blunck)  
[Combustion, Ignition, Radiation, and Energy Laboratory](http://research.engr.oregonstate.edu/blunckgroup/), Oregon State University
