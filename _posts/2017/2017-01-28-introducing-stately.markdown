---
layout: post
title: Introducing Stately
description: Building a Jekyll theme for government
date: '2017-01-28 14:42'
---

In August of 2016, the 2016 Presidential campaign in full swing and I was itching to design something for government applications. One area that interested me was how agencies could use static websites to quickly and cheaply build content-based websites for the public. I decided to take a crack at this with [Stately](https://github.com/pmarsceill/stately), a Jekyll theme geared toward government sites.

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

### Working towards a 1.0

Stately is still in an `alpha` release, with much of its documentation still a work in progress. Want to help contribute? Get started by installing the  Stately theme in your Jekyll site, filing a bug, finding an help wanted issue, or writing some docs.
