---
layout: page
title: My Personal and Research Blog
feed: atom.xml
keywords: Blog, Research, Academia
---

This is [Kyle Niemeyer](/)'s personal and research blog. A complete archive of [past](/blog/past/) posts are available via links at the top of the page.

[<i class="fas fa-rss" aria-hidden="true"></i>{:title="Atom feed of recent posts" .right}][feed]&nbsp;
A [feed][] of the most recent posts is also available.

[feed]: /blog/atom.xml

## Recent Posts

{% for post in site.categories.blog limit:5 %}
<div class="section list" markdown="0">
    <h3><a class="entry-title" href="{{ post.url }}">{{ post.title }}</a></h3>
    <span class="post-date">{{ post.date | date_to_string }}</span>
    <p class="excerpt">{{ post.excerpt }}</p>
    <p class="line">
    <i class="fas fa-comments"></i>&nbsp;<a class="comments" href="{{ post.url }}#disqus_thread">View Comments</a>
    </p>
</div>
{% endfor %}

<p>
<a href="/blog/past/">Older Posts &rarr;</a>
</p>

<script type="text/javascript">
//<![CDATA[
(function() {
		var links = document.getElementsByTagName('a');
		var query = '?';
		for(var i = 0; i < links.length; i++) {
			if(links[i].href.indexOf('#disqus_thread') >= 0) {
				query += 'url' + i + '=' + encodeURIComponent(links[i].href) + '&';
			}
		}
		document.write('<script type="text/javascript" src="https://disqus.com/forums/kyleniemeyer/get_num_replies.js' + query + '"></' + 'script>');
	})();
//]]>
</script>
