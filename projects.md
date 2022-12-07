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

Over the past few years in education, language learning, civic engagement, and technology, I have helped produce a variety of projects in related to education. This portfolio shares a sampling of my current and past projects.

## Current Projects 
<!-- Current Porject -->

{% for title in site.data.cv2.current-projects %}
{% if title.url !="" %}
### [{{ title.title }}]({{ title.url }}) 
{% else %}
### {{ title.title }} 
{% endif %}
*{{ title.role }} • {{ title.location }} • {{ title.date }}*{{ post.context }}

{{ title.context }}
{% endfor %}


## Past Projects
<!-- Past Porject -->

{% for title in site.data.cv2.past-projects %}
{% if title.url !="" %}
### [{{ title.title }}]({{ title.url }}) 
{% else %}
### {{ title.title }} 
{% endif %}
*{{ title.role }} • {{ title.location }} • {{ title.date }}*{{ post.context }}

{{ title.context }}


    {% endfor %}


## Exhibitions
<!-- Exhibitions -->

{% for title in site.data.cv2.exhibitions %}
{% if title.url !="" %}
### [{{ title.title }}]({{ title.url }}) 
{% else %}
### {{ title.title }} 
{% endif %}
*{{ title.role }} • {{ title.location }} • {{ title.date }}*{{ post.context }}

{{ title.context }}

{% endfor %}