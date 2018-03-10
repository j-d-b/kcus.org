<img src="https://raw.githubusercontent.com/j-d-b/kcus/spa/images/logos/kcus_inc.svg?sanitize=true" width="250">
___

Ground-up website rewrite for [Kanaan Consulting US, Inc.](http://www.kcus.org) *(old site link)*

Maintains similar content, layout, and styling, while being a full rewrite designed for future ease of maintenance.

## Key Features
* jQuery-powered SPA
* Mobile responsive, using [Bootstrap 4](https://getbootstrap.com/)
* Largely Bootstrap-styled atomic CSS written in [Sass](sass-lang.com)
* [Handlebars](http://handlebarsjs.com/) templates for html clarity

## SPA
Listens for `hashchange` event and changes page content with `$.load`.

Pages partials with `_` prefix, for insert into index.html `#main-content` div.

## Handlebars
Uses Handlebars for repeated staff, project, and home info elements, dramatically shortening html and facilitating addition of new staff or projects with minimal-to-no codebase knowledge.

Handlebars templates are found in `templates/` and are precompiled into `compiled-templates.js`.

## About KCUS, Inc.
> Kanaan Consulting US, Inc. is a Cambridge-based engineering company that offers comprehensive engineering and consulting services with a focus on multimodal transportation.
