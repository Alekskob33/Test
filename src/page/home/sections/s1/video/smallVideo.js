import HeaderVideo from './video.js';

export default class SmallVideo extends HeaderVideo {
  constructor(elem) {
    super(elem);
    this.smallVideoWrapper = elem.closest('div');
  }

  hide() {
    this.smallVideoWrapper.style.clipPath = 'rect(0 100% 100% 0)';

    setTimeout(() => {
      this.smallVideoWrapper.style.transition = 'clip-path 3s linear';
      this.smallVideoWrapper.style.clipPath = 'rect(0 100% 100% 100%)';
    }, 0);
  }

  show() {
    this.smallVideoWrapper.style.transition = 'none';
    this.smallVideoWrapper.style.opacity = 0;
    this.smallVideoWrapper.style.clipPath = 'rect(0 100% 100% 0)';

    setTimeout(() => {
      this.smallVideoWrapper.style.transition = 'opacity 1s';
      this.smallVideoWrapper.style.opacity = 1;
    }, 0);
  }
}
