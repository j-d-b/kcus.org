// Jacob Brady
// 2018 KCUS Inc.
import 'nodelist-foreach-polyfill';
import style from './styles/style.scss'; // single, global stylesheet
import { route, setupNavigation } from './router.js';

// setup the spa internal link handlers for the navbar, which never reloads
setupNavigation(document.querySelector('nav'));

// route the intial page, based on url
route(window.location.pathname);

// route the corresponding page when the user does a browser back or forward
window.onpopstate = () => route(window.location.pathname);
