// Jacob Brady
// 2018 KCUS Inc.
import { route } from './router.js';

route(window.location.pathname);

document.querySelectorAll('.spa-nav').forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    let path = e.target.getAttribute('href');
    console.log(path);
    route(path);
  });
});

window.onpopstate = e => {
  console.log(e.state.path);
  if (e.state) {
    route(e.state.path);
  }
}
