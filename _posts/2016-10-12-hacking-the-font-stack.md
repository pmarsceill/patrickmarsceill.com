---
layout: post
title:  "Hacking the Font Stack"
description: "Explorations in a modern native fonts on the web"
date: 2016-10-12 17:18:00
featured_img: articles/hacking-font-stack/hacking-font-stack.png
image: articles/hacking-font-stack/hacking-font-stack.png # for open graph
---

I started experimenting with web fonts in 2007 after reading [CSS @ Ten: The Next Big Thing
][039e80cc]. Ten years prior, [this CSS2 draft from 1997][5ad770fe] mentions the `@font-face` directive (which allows the use of non-system font files on webpages) but was removed in the [CSS2.1 spec][964be9d5]. Funny enough, IE 4 was the only browser to ever implement it back then. Way to be forward thinking, IE :clap:

  [964be9d5]: https://www.w3.org/TR/CSS21/ "Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification"
  [5ad770fe]: https://www.w3.org/TR/WD-CSS2-971104/cover.html "CSS 2 Specification - W3C Working Draft 04-November-1997"
  [039e80cc]: http://alistapart.com/article/cssatten "CSS @ Ten: The Next Big Thing"
  [423c2466]: https://www.w3.org/TR/2001/WD-css3-fonts-20010731/ "CSS3 module: Fonts, W3C Working Draft 31-July-2001"

When `@font-face`‘s made its official debut in the CSS3 fonts module in the [2001 working draft][423c2466], Flash was a huge part of the web. One of the major reasons that the agencies that I worked with used Flash, was its seemingly limitless restrictions on layout, fonts, and animations and consistency across platforms. `@font-face` was just the thing CSS needed if was going to seriously compete with Flash and become adopted as part of the modern (and standard) way to build websites.

A lot of folks (myself included) developed a palpable distaste for Flash-based sites as they were slow to load, relied on a locally installed plugin, and often were a black box of content that was inaccessible to a large chunk of the web’s users. HTML with CSS, we argued, offered a more extensible and  accessible way to present content and with the addition of features like  `@font-face` we could start to see a future in setting our web pages in nice type, also.

## Now this is happening

The web became a ubiquitous thing that is supposed to be available on any capable device, largely thanks to the adoption of mobile-friendly web design (like responsive), the downfall of Flash as a web technology, and having users glued to their phones reading Facebook at all times. This has forced those who build web pages to consider performance impacts (load time, render time, etc..) more than ever before &mdash; or at least since the days of dialup when that draft was written in 1997.

Like images, JavaScript, and CSS bloat; web fonts can easily become performance bottlenecks if not kept in check. Can we go back to 1997 and make websites using system fonts?... Of course we can. Do we want to use `Lucida Grande` and `Georgia` for everything?... I sure hope not. Luckily there are some more modern options.

## Font stack explorations

### The Helvetica / Arial alternative

### The classy serif

### Monospace
