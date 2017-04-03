# The source for patrickmarsceill.com

This is the source code that runs Patrick Marsceill dot com.

## Local development

This site runs on Jekyll and is hosted on GitHub pages. This assumes you're running ruby with bundler installed.

### Install dependancies

#### Jekyll and gems dependancies
```
$ bundle install
```

#### Local development dependancies
```
$ npm install
```

### Local server
```
script/server
```

### Run tests locally
```
script/test
```

Tests for:
-   CSS style / linting (via styelint)
-   HTML formatting / linting (via HTML proofer)
-   Checks for dead links (via HTML proofer)

### Publish/deploy to patrickmarsceill.com / gh-pages branch
(You must have push access to this repo)
```
script/publish
```

Assets are compressed / served through the `jekyll-assets` gem.

Everything in `master` is deployable. The `gh-pages` branch is reserved for the published site.
