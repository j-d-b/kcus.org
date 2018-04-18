<img src="https://raw.githubusercontent.com/j-d-b/kcus.org/dist/images/logos/kcus_inc.svg?sanitize=true" width="250">

Ground-up website rewrite for [Kanaan Consulting US, Inc.](http://www.kcus.org) *(old site link)*

Maintains similar content, layout, and styling, while being a full rewrite designed for future ease of maintenance.

## Build
Run `npm run build` to generate `dist/` directory for distribution.

Bundles code from `src/`

## Key Features
* Pure JavaScript powered SPA
* Mobile responsive layout, using [Bootstrap 4](https://getbootstrap.com/)
* Simple, largely atomic, selector-free [SCSS](sass-lang.com)
* [Handlebars](http://handlebarsjs.com/) templates for html clarity
* [Babel](https://babeljs.io/) for ES6+ syntax, js modules
* [Webpack](https://webpack.js.org/) for bundling, json/handlebars loading

## SPA
Listens for `popstate` event and changes page body content.

`spa-nav` class given to anchor indicates that the href is an internal link to a subpage within the web app.

Page templates injected into index.html `<section id="main-content"></section>`

## Handlebars
Uses Handlebars for repeated staff, project, and home info elements, dramatically shortening html and facilitating addition of new staff or projects with minimal-to-no codebase knowledge.

Handlebars templates are found in `src/templates/` and are generated into html using the JSON data files in `src/data/`.

To add/change staff or projects, change only the JSON data in `src/data/`, no need to touch any HTML or JS.

## Maintaining
### To add new main pages

all staff hashes prefix w/ staff-
all project hashes prefix w/ projects-
add new project, if no images, don't include the "image" attribute in the project in projects.json


adding to or changing the names of the main nav pages is a larger development effort

client-side routing. all urls resolve to index.html

## About KCUS, Inc.
> Kanaan Consulting US, Inc. is a Cambridge-based engineering company that offers comprehensive engineering and consulting services with a focus on multimodal transportation.
