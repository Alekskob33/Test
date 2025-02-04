export function fadeIn(elem, optionsString = '300ms ease-in 0ms') {
  elem.classList.add('fadeOut');
  elem.classList.remove('fadeIn');
  elem.offsetHeight; // restart animation

  elem.style.transition = `opacity ${optionsString}`;
  elem.classList.remove('fadeOut');
  elem.classList.add('fadeIn');
}

export function fadeOut(elem, optionsString) {
  elem.style.transition = `opacity ${optionsString}`;
  elem.classList.remove('fadeIn');
  elem.classList.add('fadeOut');
}
