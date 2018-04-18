export function setupProjHandlers() {
  document.querySelectorAll('.proj-img').forEach(element => {
    element.addEventListener('click', e => {
      let imgSrc = e.currentTarget.getAttribute('src');
      document.querySelectorAll('.proj-img').forEach(el => el.classList.remove('proj-img-selected'));
      e.currentTarget.classList.add('proj-img-selected');
      document.getElementById('proj-lg-img').src = imgSrc;
    });
  });
}
