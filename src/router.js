const homeTemplate = require('./views/home.hbs');
const projectsTemplate = require('./views/projects.hbs');
const projectTemplate = require('./views/project.hbs');
const staffTemplate = require('./views/staff.hbs');
const personTemplate = require('./views/person.hbs');
const contactTemplate = require('./views/contact.hbs');

import HomeData from './data/home.json';
import StaffData from './data/staff.json';
import ProjectsData from './data/projects.json';

// load the relevant page content and setup event listeners based on path
// note: only checks subpages for staff and projects; also no nested subpages
export function route(path) {
  const pages = path.substring(1).split('/'); // don't need to error check bc of default case
  const mainPage = pages[0];
  const isSubPage = pages[1] && true;

  switch (mainPage) {
    case 'home':
      setHighlight('home');
      setTitle('Home');
      setContent(homeTemplate(HomeData));
      break;
    case 'projects':
      setHighlight('projects');
      routeProjects(path, isSubPage);
      break;
    case 'staff':
      setHighlight('staff');
      routeStaff(path, isSubPage);
      break;
    case 'contact':
      setHighlight('contact');
      setTitle('Contact');
      setContent(contactTemplate());
      break;
    default:
      setHighlight('home');
      setTitle('Home');
      setContent(homeTemplate(HomeData));
      window.history.replaceState({}, null, '/home');
  }

  setupNavigation(document.querySelector('#main-content'));
}

// setup the event listeners for spa navigation (internal links) on anchors with
// the 'spa-nav' class, within the given element
export function setupNavigation(element) {
  element.querySelectorAll('.spa-nav').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      let path = e.currentTarget.getAttribute('href');
      if (path !== window.location.pathname) {
        route(path);
        window.history.pushState({}, null, path);
      }
    });
  });
}

// highlights only navbar item corresponding to the given main page
function setHighlight(mainPage) {
  document.querySelectorAll('.nav-title').forEach(el => el.classList.remove('nav-active'));
  document.querySelector(`.nav-title[href="/${mainPage}"]`).classList.add('nav-active');
}

function setTitle(title) {
  document.title = 'Kanaan Consulting US, Inc - ' + title;
}

function setContent(html) {
  document.getElementById('main-content').innerHTML = html;
}

// staff main route can have subpages, so find it and load accordingly
function routeStaff(path, isSubPage) {
  let content, title;
  if (isSubPage) {
    const person = StaffData.staff.find(person => person.path === path);
    content = personTemplate(person);
    title = person.firstName;
  } else {
    content = staffTemplate(StaffData);
    title = 'Staff'
  }

  setTitle(title);
  setContent(content);
}

// projects main route can have subpages, so find it and load accordingly
function routeProjects(path, isSubPage) {
  let content, title;
  if (isSubPage) {
    let project;
    for (const cat of ProjectsData.projectCategories) {
      project = cat.projects.find(proj => proj.path === path);
      if (project) break;
    }

    content = projectTemplate(project);
    title = project.title;
  } else {
    content = projectsTemplate(ProjectsData);
    title = 'Projects'
  }

  setTitle(title);
  setContent(content);
  if (isSubPage) setupImgViewer();
}

// sets up the event listeners for the project page image viewer on click
function setupImgViewer() {
  document.querySelectorAll('.proj-img').forEach(element => {
    element.addEventListener('click', e => {
      document.querySelectorAll('.proj-img').forEach(el => el.classList.remove('proj-img-selected'));
      e.currentTarget.classList.add('proj-img-selected');

      let imgSrc = e.currentTarget.getAttribute('src');
      document.getElementById('proj-lg-img').src = imgSrc;
    });
  });
}
