// Jacob Brady
// 2018 KCUS Inc.
import { route, setupNavigation } from './router.js';

setupNavigation(document.querySelector('nav'));
route(window.location.pathname);

window.onpopstate = () => route(window.location.pathname);
