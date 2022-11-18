---
layout: default
title: Projects
---
# Portfolio

<div class="tabsWrapper clear" id="t0">
<ul class="tabs">
    <li>
        <a href="#current-projects">CURRENT PROJECTS</a></li>
    <li>
        <a href="#past-projects">PAST PROJECTS</a></li>
      <li>
        <a href="#past-projects">EXHIBITIONS</a></li>
</ul>
</div>

Over the past five years in higher education, museums, and cultural institutions, I have helped produce a variety of projects to deepen public and scholarly engagement with digital materials. This portfolio shares a sampling of my current and past projects, from tools to exhibitions.

## Current Projects 

{% assign sorted_posts = site.work | sort:"start-year" | reverse %}
{% for post in sorted_posts %}
{% if post.status == "current" %}
### [{{ post.title }}]({{ site.url }}/work/{{ post.slug }}) 
*{{ post.role }} • {{ post.location }} • {{ post.start-year }}-{{ post.end-year }}*

{{ post.context }}


{% endif %}
{% endfor %}

## Past Projects

{% for post in sorted_posts %}
{% if post.status == "legacy" %}
### [{{ post.title }}]({{ site.url }}/work/{{ post.slug }}) 
*{{ post.role }} • {{ post.location }} • {{ post.start-year }}-{{ post.end-year }}*

{{ post.context }}

{% endif %}
{% endfor %}

## Exhibitions
<!-- Exhibitions-->

{% for title in site.data.cv2.exhibitions %}
{% if title.url !="" %}
### [{{ title.title }}]({{ title.url }}) 
{% else %}
### {{ title.title }} 
{% endif %}
*{{ title.role }} • {{ title.location }} • {{ title.date }}*{{ post.context }}

{{ title.context }}

{% endfor %}