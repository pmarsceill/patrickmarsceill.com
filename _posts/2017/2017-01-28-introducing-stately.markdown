---
layout: post
title: Introducing Stately
description: Building a Jekyll theme for government
date: '2017-01-28 14:42'
---

On August 5, 2016 an issue was opened in an internal GitHub repository with an open call for designers to contribute some fresh themes to [Jekyll](http://jekyllrb.com) / [GitHub Pages](https://pages.github.com). One of the ideas kicked around in this issue was for "something goverment-y". With the 2016 Presidential campaign in full swing, I was itching to design something for this audience (of which I had no experience).

To my surprise, static website development is on the rise in this space. [Healthcare.gov](http://healthcare.gov) [uses Jekyll][fbf9912c] to serve it's static pages and [18f](https://18f.gsa.gov) (the organization responsible for a lot of government websites) have built their own static website platform called [Federalist](https://federalist.18f.gov). Government policy  documents like the [Federal Source Code Policy](https://sourcecode.cio.gov/) are running on Jekyll and are being hosted on GitHub Pages.

  [fbf9912c]: https://developmentseed.org/blog/new-healthcare-gov-is-open-and-cms-free/ "New Healthcare.gov is Open, CMS-Free"

Because I'm building a theme that can be used for many different purposes, I wanted to take measure of some unique needs government agencies might have. Auditing many different websites at various levels, I started building a design pattern library that would eventually inform how I built this new Jekyll theme.

#### Here are some common themes I found that influenced my design:

-   Government websites are mostly text and forms
-   Downloadable assets are common
-   Successful sites prioritize performance, utility, and accessibility
-   Users come to these sites for critical information like due dates, address and location, policy, and forms
-   Images are often superfluous, but necessary for media coverage
-   Global notices that specify a particular government or agency affiliation are common
-   Pull requests should be welcome and easily accessed on open-government sites

### Getting to a 1.0

Spoiler alert: we're not there yet. Stately is still in an `alpha` release, with much of its documentation still a work in progress.

Stately uses a few open source dependancies that make it easier to maintain and a pleasure to use. I work in [Primer CSS](http://primercss.io) as part of the Design Systems team at GitHub and I wanted to experiment using its layout engine as a base for another project. We distribute Primer through Node Package Manager (NPM) and until I started building Stately, I never tried to use CSS dependancies with NPM on a Jekyll site. Turns out, you couldn't do this very well until recently.

As of last week, GitHub pages now supports the largely undocumented `load_path` configuration attribute in its Sass compiler (released in Jekyll 3.3.1). This means you can add `node_modules` as an additional path where the Sass compiler will look files to compile.

Here's an example of how it works:

```yaml
sass:
  sass_dir: assets/css/
  # Load dependancies
  load_paths:
    - node_modules/
```

`assets/css` is directory where the Stately's styles live, `node_modules` contain all the dependancies (like the layout system from Primer amongst other things). This allows us to keep the dependency management automated with NPM while developing custom styles for Stately separately.
