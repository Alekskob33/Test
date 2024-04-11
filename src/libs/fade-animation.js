export function fadeIn(elem, optionsString = '300ms 0ms ease-in') {
  elem.style.opacity = 0; // init
  elem.offsetHeight; // restart animation

  elem.style.transition = `opacity ${optionsString}`;
  elem.style.opacity = 1.0;
}

export function fadeOut(elem, optionsString) {
  elem.style.transition = `opacity ${optionsString}`;
  elem.style.opacity = 0;
}
