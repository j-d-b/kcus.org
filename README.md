# KCUS Inc.

Ground-up website rewrite for [Kanaan Consulting US, Inc.](http://www.kcus.org)

Keeps similar content, layout, and styling, while being a full rewrite,
including

Key features:
* jQuery-powered SPA
* Mobile responsive, using [Bootstrap 4](https://getbootstrap.com/)
* 

Listens for `hashchange` event and changes page content with `$.load`
pages partials with `_` prefix, for insert into index.html `#main-content`

Precompiles [handlebars](http://handlebarsjs.com/) templates, found in the `templates` directory
