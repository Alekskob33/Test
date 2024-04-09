export default class FadeAnimation {
  fadeIn(elem) {
    elem.style.opacity = 0; // init
    elem.offsetHeight;

    setTimeout(() => {
      elem.style.transition = 'opacity 300ms 0ms ease-in';
      elem.style.opacity = 1.0;
    }, 0);
  }
  fadeOut(elem) {
    elem.style.opacity = 0.0;
  }
}
