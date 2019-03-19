<img src="https://raw.githubusercontent.com/j-d-b/kcus.org/master/src/images/logos/kcus_inc.svg?sanitize=true" width="250">

[![Netlify Status](https://api.netlify.com/api/v1/badges/1ee7e33e-e229-4961-8b12-ed4a1a6944a1/deploy-status)](https://app.netlify.com/sites/kcus/deploys)

Ground-up website rewrite for [Kanaan Consulting US, Inc.](http://www.kcus.org)

Maintains similar content, layout, and styling, while being a full rewrite designed for future ease of maintenance.

**Note:** This is the official repository for the live site.

## Prerequisites
The following sections assume you have the following installed:
* [Node.js](https://nodejs.org/en/) runtime
* [Yarn](https://yarnpkg.com/en/) package manager

## Usage
Install dependencies
```
yarn install
```

### Development
Start the hot-reloading development server (at http://localhost:8080)
```
yarn develop
```

### Production Build
To generate `dist/` directory for distribution:
```
yarn build
```

Uses [webpack](https://webpack.js.org/) to bundle and copy code from `src/`
* `styles/`, `data/`, `views/`, and all JavaScript files bundled into `bundle.js`
* `images/` files processed with [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) and copied to `dist/`
* `index.html` copied to `dist/`
* All files in `netlify/` are copied to `dist/`

**Note:** `ImageminPlugin` does not run in `development` mode which makes build time insanely faster.

## Netlify
The `master` branch of this repository represents the current live site, hosted with Netlify. A new build is triggered on every PR merge to this branch.

## Key Features
* Vanilla JavaScript powered SPA, client-side routing with the [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
* Simple, largely atomic, selector-free [SCSS](https://sass-lang.com)
* Mobile responsive layout, using [Bootstrap 4](https://getbootstrap.com/) CSS
* [Handlebars](http://handlebarsjs.com/) for generating html views from JSON data
* [Babel](https://babeljs.io/) for ES6+ syntax, JavaScript modules
* [webpack](https://webpack.js.org/) for bundling, JSON/template loading

## SPA
Listens for `popstate` event and changes page body content.

`spa-nav` class given to anchor indicates that the href is an internal link to a subpage within the web app.

Client-side routing, in `router.js`.

Page templates injected into `<section id="main-content"></section>` in `index.html`.

## Views
Uses **Handlebars** for repeated staff, project, and home info elements, dramatically shortening fixed HTML and facilitating addition of new staff or projects with minimal-to-no codebase knowledge.

Handlebars files are found in `src/views/` and are generated into html using the JSON data files in `src/data/`.

To add/change staff or projects, change only the JSON data in `src/data/`, no need to touch any HTML or JS.

## Maintenance/Additions
This site was built to be easily managed by those without knowledge of the codebase, or even much web development in general.

Common actions, such as add/remove/edit a project or staff member requires *only* changing the respective JSON data file.

Adding to or changing the names of the main navbar pages is a larger development effort.

**Note:** all anchor elements whose `href` attribute refers to an internal page must be given class `spa-nav`.

Below I'll discuss the workflow for adding new projects or staff. From this it should be fairly clear how to perform other similar maintenance actions.  

### Adding a new project
All project content is in `src/data/projects.json`

`projects.json` holds an array of project categories (e.g. current, software...). Find the relevant category and create a new project object in the category's `projects` attribute array.

Project object attributes:

Attribute | Value | Description
--- | --- | ---
title | string | General project title
pageTitle | string | Header title of on its page; if not included, `title` will be used *(optional)*
path | string (absolute path) | Route to the page. Must be /projects/THISPAGE
thumbImg | string (image path) | Path to thumbnail image for use on /projects page. **Should be 9:5**
location | string | Where the project took place
client | string | Who the project was for
date | string | Year or range of years (e.g. 2010-2012) which the project takes place
images | array | Images for use on this project's page *(optional)*
description | string | Description for use on projects page card
descriptionHTML | string (html) | HTML body for the project page; inserted beneath the project images

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
  "description": "This is a test project",
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
path | string (absolute path) | Route to the page. Must be /staff/THISSTAFF
firstName | string | Staff member's first name
lastName | string | Staff member's last name
title | string | Role at the company, e.g. "Engineer"
imgThumbSource | string (img path) | Path to 2:1 aspect ratio image, for small displays and staff page thumbnail
imgTallSource | string (img path) | Path to 3:4 aspect ratio portrait for this staff's page
bioHTML | string (html) | HTML body for the staff page

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

### Updating the home infos
Process is the same as adding/updating staff/projects.

Photos are **3:2** aspect ratio and the containing `div` has a `max-width` of `310px`, so images need not be large.

## License
This package is licensed under [The MIT License](https://opensource.org/licenses/MIT).

## Todo
I took the image files for the projects from the old site, and they're all fairly terrible quality. The dimensions are also not standard. I spent some time doing a bit of bulk removal; some files were randomly huge but awful quality. This all needs to be redone and the sizes optimized. There is still a lot of loading speed to be gained from this. Additionally, quick-loading image placeholders could be added.

## About KCUS, Inc.
> Kanaan Consulting US, Inc. is a Cambridge-based engineering company that offers comprehensive engineering and consulting services with a focus on multimodal transportation.
