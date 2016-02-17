kyleniemeyer.com
==============

This repository contains the source for my personal site at <http://kyleniemeyer.com>.

IMPORTANT!
===========
I am very happy for others to use my design as a basis for their own site but PLEASE ensure you delete all my _content_ (i.e., pages, blog posts, etc) before uploading your version to the web.

Be especially careful with some of the dynamic content and javascript I use on my pages, particularly:

* Disqus comments on blog posts - These are hard coded to my Disqus account. If you just copy and paste my templates I will be the moderator of your blog's comments. You don't want that. If you don't know how to set up your own Disqus account please remove the Javascript from the bottom of the `_layouts/blog-post.html` file.

* Google analytics - My personal Google analytics code is hard-coded into the `_layouts/default.html` template which every page inherits from. If you do not remove or change the Javascript at the bottom of this template all your site's traffic will be counted as mine. You don't want that.

Basically, the rules are these:

* _If you don't understand it or didn't write it then remove it_.
* _Test your site on a local machine before you upload your site_.

Thanks.

License
=======

Unless otherwise attributed, all of the content in this repository is released under a ([Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) licence.

Thanks
======
A huge thanks to Tom Preston-Werner for creating Jekyll.
