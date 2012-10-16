---
layout: name

title: Colophon
top: Kyle Niemeyer
section: Info

---

Colophon
========

I switched to this site design after a couple years of using [WordPress](http://wordpress.org/), which was easy but not very powerful or clean looking. I could never find a theme that fit what I had in mind for the site, plus it was hacked at least once (although that may have been due at the server-level, WordPress certainly has vulnerabilities).

So, after seeing a bit about jekyll and realizing the benefits of a static site (speed, and no way to be hacked other than through the server), I decided to switch. Looking through the [list of sites](https://github.com/mojombo/jekyll/wiki/sites) using jekyll, I saw [Mark Reid's site](http://mark.reid.name/) and fell in love (with the site design).

Like many other jekyll users, he hosts his site's source code on [GitHub][] and generously allows people to "borrow" the design---so I did. And promptly customized it for my own purposes, although the style still very much matches his.

The Mechanics
-------------

The content of this site begins life as a directory full of text files on my [MacBook Pro](http://www.apple.com/macbookpro/) written using the editor [TextMate](http://macromates.com/) in a format called  [Markdown](http://daringfireball.net/projects/markdown/). I push all of these out to my [GitHub repository](https://github.com/kyleniemeyer/kyleniemeyer.com) using the version control system [git](http://code.google.com/p/git-osx-installer/).

To update the site, the text files are first transformed into HTML by [Maruku](http://maruku.rubyforge.org/) with [blahtex](http://gva.noekeon.org/blahtexml/) helping by rendering LaTeX equations into images. [Jekyll][jekyll] orchestrates the whole process, adding headers, navigation bars and the like, creating a directory full of static HTML ready to be served.  

Finally, I then [rsync](http://www.samba.org/rsync/) the newly created site to my server at [DreamHost](http://dreamhost.com/).

Licence
-------

Unless specified otherwise, all design and content within this site is 
licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported License</a>.

The main site design was not done by me, but rather [Mark Reid](http://mark.reid.name/), so you should [contact him](mailto:mark@reid.name) if you want to use it.

[jekyll]: http://jekyllrb.com
[GitHub]: https://github.com/