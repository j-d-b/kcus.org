<img src="https://raw.githubusercontent.com/j-d-b/kcus/spa/images/logos/kcus_inc.svg?sanitize=true" width="250">

Ground-up website rewrite for [Kanaan Consulting US, Inc.](http://www.kcus.org) *(old site link)*

Maintains similar content, layout, and styling, while being a full rewrite designed for future ease of maintenance.

## Key Features
* Pure JavaScript powered SPA
* Mobile responsive layout, using [Bootstrap 4](https://getbootstrap.com/)
* Largely Bootstrap-styled atomic CSS written in [Sass](sass-lang.com)
* [Handlebars](http://handlebarsjs.com/) templates for html clarity

## SPA
Listens for `popstate` event and changes page body content.

Page templates injected into index.html `<section id="main-content"></section>`


## Handlebars
Uses Handlebars for repeated staff, project, and home info elements, dramatically shortening html and facilitating addition of new staff or projects with minimal-to-no codebase knowledge.

Handlebars templates are found in `templates/` and are precompiled into `scripts/compiled-templates.js`.

Templates are injected by element `id`, all which are prefixed with `hbs-` for clarity.

To add/change staff or projects, change only the json data files in `template-data/`, no need to touch any HTML or JS.

## Maintaining
To add new main pages
change pageHashes

all staff hashes prefix w/ staff-
all project hashes prefix w/ projects-

`.js-nav` class given to anchor indicates that the href is an internal link to a subpage within the web app

adding to or changing the names of the main nav pages is a larger development effort

client-side routing. all urls resolve to index.html

## About KCUS, Inc.
> Kanaan Consulting US, Inc. is a Cambridge-based engineering company that offers comprehensive engineering and consulting services with a focus on multimodal transportation.
