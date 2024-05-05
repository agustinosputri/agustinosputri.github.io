---
layout: layouts/base.njk
templateEngineOverride: md
eleventyNavigation:
  key: Gallery
  order: 5
---

<h1>Image Gallery</h1>

<img src="./public/img/bryce-canyon-1.jpeg" width="50" height="50"/>
<img src="{{ './public/img/bryce-canyon-1.jpeg' | url }}" width="50" height="50"/>

<img src="./public/img/central-park-spring.jpeg" width="50" height="50"/>
<img src="{{ './public/img/central-park-spring.jpeg' | url }}" width="50" height="50"/>
