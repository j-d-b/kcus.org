<img src="https://raw.githubusercontent.com/j-d-b/kcus.org/master/src/images/logos/kcus_inc.svg?sanitize=true" width="250">

Ground-up website rewrite for [Kanaan Consulting US, Inc.](http://www.kcus.org) *(old site link)*

Maintains similar content, layout, and styling, while being a full rewrite designed for future ease of maintenance.

## Build
`npm i` to install required dependencies.
`npm run build` to generate `dist/` directory for distribution.

**Note:** use `npm run dev` to set webpack mode to development and avoid minification.

Uses [webpack](https://webpack.js.org/) to bundle and copy code from `src/`
* `styles/`, `data/`, `views/`, and all JavaScript files bundled into `bundle.js`
* `images/` files processed with [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) and copied to `dist/`
* `index.html` copied to `dist/`

## Key Features
* Pure JavaScript powered SPA, client-side routing with the [history api](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
* Simple, largely atomic, selector-free [SCSS](sass-lang.com)
* Mobile responsive layout, using [Bootstrap 4](https://getbootstrap.com/) CSS
* [Handlebars](http://handlebarsjs.com/) for generating html views from JSON data
* [Babel](https://babeljs.io/) for ES6+ syntax, JavaScript modules
* [webpack](https://webpack.js.org/) for bundling, json/handlebars loading

## SPA
Listens for `popstate` event and changes page body content.

`spa-nav` class given to anchor indicates that the href is an internal link to a subpage within the web app.

Client-side routing, in `router.js`.

Page templates injected into index.html `<section id="main-content"></section>`.

## Views
Uses **Handlebars** for repeated staff, project, and home info elements, dramatically shortening fixed html and facilitating addition of new staff or projects with minimal-to-no codebase knowledge.

Handlebars files are found in `src/views/` and are generated into html using the JSON data files in `src/data/`.

To add/change staff or projects, change only the JSON data in `src/data/`, no need to touch any HTML or JS.

## Maintenance/Additions
This site was built to be easily managed by those without knowledge of the codebase, or even web development in general.

Common actions, such as add/remove/edit a project or staff member requires *only* changing the respective JSON data file.

Adding to or changing the names of the main navbar pages is a larger development effort.

**Note:** all anchor elements whose href attribute refers to an internal page must be given class `spa-nav`.

Below I'll discuss the workflow for adding new projects or staff. From this it should be fairly clear how to perform other similar maintenance actions.  

### Adding a new project
All project content is in `src/data/projects.json`

`projects.json` holds an array of project categories (e.g. current, software...). Find the relevant category and create a new project object in the category's `projects` attribute array.

Project object attributes:

Attribute | Value | Description
--- | --- | ---
title | string | General project title
pageTitle | string | **Optional** header title of on it's page; if not included, `title` will be used
path | string absolute path | Route to the page. Must be /projects/THISPAGE
thumbImg | string image path | Path to thumbnail image for use on /projects page
location | string | Where the project took place
client | string | Who the project was for
date | string | Year or range of years (e.g. 2010-2012) which the project takes place
images | array | **Optional** images for use on this project's page
description | string | Description for use on projects page card
descriptionHTML | string html | HTML body for the project page; inserted beneath the project images

An example project object:
```
{
  "title": "RTTM",
  "pageTitle": "Real Time Traffic Management",
  "path": "/projects/rttm",
  "thumbImg": "/images/projects/rttm-thumb.jpg",
  "location": "United States",
  "client": "Internal",
  "date": "2017 - Present",
  "images": [
    "/images/projects/travel-sign.jpg",
    "/images/projects/big-blue-sky.png"
  ],
  "description": "This is a test projects",
  "descriptionHTML": "<p>Welcome to the RTTM page</p><p>Have a good day</p>"
}
```

The build processes will take care of everything else for you!

### Adding a new staff member
All staff content is in `src/data/staff.json`

`staff.json` holds an array of staff objects; add a new one wherever you please, they are rendered in the order which they appear in the data file.

Staff object attributes:

Attribute | Value | Description
--- | --- | ---
path | string absolute path | Route to the page. Must be /staff/THISSTAFF
firstName | string |
lastName | string |
title | string | Role at the company, e.g. "Engineer"
imgThumbSource | string img path | Path to 2x1 aspect ratio image, for small displays and staff page thumbnail
imgTallSource | string img path | Path to 3x4 aspect ratio portrait for this staff's page
bioHTML | string html | HTML body for the staff page

An example staff object:
```
{
  "path": "/staff/jacob",
  "firstName": "Jacob",
  "lastName": "Brady",
  "title": "Software Developer",
  "imgThumbSource": "/images/staff/jacob-2x1-thumb.png",
  "imgTallSource": "/images/staff/jacob-3x4.jpg",
  "bioHTML": "<p>Mr. Brady is a Software Developer at KCUS</p>"
}
```

## Todo
I took the image files for the projects from the old site, and they're all fairly terrible quality. The dimensions are also not standard. I spent some time doing a bit of bulk removal, some files were randomly huge but awful quality. This all needs to be redone and the sizes optimized.

## About KCUS, Inc.
> Kanaan Consulting US, Inc. is a Cambridge-based engineering company that offers comprehensive engineering and consulting services with a focus on multimodal transportation.
