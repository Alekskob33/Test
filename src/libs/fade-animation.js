export function fadeIn(elem, optionsString = '300ms ease-in 0ms') {
  elem.style.opacity = 0; // init
  elem.offsetHeight; // restart animation

  elem.style.transition = `opacity ${optionsString}`;
  elem.style.opacity = 1.0;
}

export function fadeOut(elem, optionsString) {
  elem.style.transition = `opacity ${optionsString}`;
  elem.style.opacity = 0;
}
