const controls = document.querySelector('.controls');

controls.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    return;
  }

  e.preventDefault();

  const prevActivePane = document.querySelector('.slide.is-active');

  if (prevActivePane) {
    prevActivePane.classList.remove('is-active');
  }

  const paneId = e.target.getAttribute('href').slice(1);
  const nextActivePane = document.querySelector(`#${slideId}`);
  nextActivePane.classList.add('is-active');
});
