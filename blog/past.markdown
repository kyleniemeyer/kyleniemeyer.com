---
layout: page
title: Archives
section: Past

feed: "/blog/atom.xml"
keywords: Blog, Research, Academia
---

This is the complete archive of posts from [Kyle Niemeyer's Personal
and Research blog](/blog/) in reverse chronological order.

{% for post in site.categories.blog %}
<div class="section list" markdown="0">
    <h3><a class="entry-title" href="{{ post.url }}">{{ post.title }}</a></h3>
    <span class="post-date">{{ post.date | date_to_string }}</span>
    <p class="excerpt">{{ post.excerpt }}</p>
    <p class="line">
    <a class="comments" href="{{ post.url }}#disqus_thread">View Comments</a>
    </p>
</div>
{% endfor %}

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
	})();
//]]>
</script>
