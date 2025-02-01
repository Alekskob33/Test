import './style.zoom-out.sass';

export function animateZoomOut(elem) {
  elem.classList.add('animate-zoom-out');
}

export function resetZoomOut(elem) {
  elem.classList.remove('animate-zoom-out');
}
