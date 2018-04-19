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
      setContent(contactTemplate());
      break;
    default:
      setHighlight('home');
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

// sets the innerHTML of #main-content to the given html content
function setContent(html) {
  document.getElementById('main-content').innerHTML = html;
}

// staff main route can have subpages, so find it and load accordingly
function routeStaff(path, isSubPage) {
  if (isSubPage) {
    const person = StaffData.staff.find(person => person.path === path);
    setContent(personTemplate(person));
  } else {
    setContent(staffTemplate(StaffData));
  }
}

// projects main route can have subpages, so find it and load accordingly
function routeProjects(path, isSubPage) {
  const getProject = (categories) => {
    for (let i = 0; i < categories.length; i++) {
      let proj = categories[i].projects.find(proj => proj.path === path);
      if (proj) return proj;
    }
  };
  const data = isSubPage ? getProject(ProjectsData.projectCategories) : ProjectsData;
  const content = isSubPage ? projectTemplate(data) : projectsTemplate(data);
  setContent(content);

  if (isSubPage) setupProjHandlers();
}

// sets up the event listenrs for the project page image viewer
function setupProjHandlers() {
  document.querySelectorAll('.proj-img').forEach(element => {
    element.addEventListener('click', e => {
      let imgSrc = e.currentTarget.getAttribute('src');
      document.querySelectorAll('.proj-img').forEach(el => el.classList.remove('proj-img-selected'));
      e.currentTarget.classList.add('proj-img-selected');
      document.getElementById('proj-lg-img').src = imgSrc;
    });
  });
}
