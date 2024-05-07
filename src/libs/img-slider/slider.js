import { logit } from '../../page/global/preloader/logit.js';
import './slider.style.sass';

export class ImgSlider {
  constructor({ interval = 1000 } = {}) {
    this.container = null;
    this.slides = null;

    this.timerId = null;
    this.interval = interval; // ms

    this.currentSlide = null;
    this.state = 'paused';
  }

  initSlider(container) {
    if (!(container instanceof HTMLElement)) return;

    this.container = container;
    this.slides = [...this.container.children] || [];
    this.currentSlide = container.querySelector('.active') || this.slides[0];

    return this;
  }

  get canRun() {
    return this?.slides.length > 0 && this.state !== 'playing';
  }

  run() {
    if (!this.canRun) return;
    this.state = 'playing';

    this.timerId = setInterval(() => {
      this.currentSlide.classList.remove('active');
      let nextSlide = this.currentSlide.nextElementSibling;

      if (nextSlide) {
        nextSlide.classList.add('active');
        this.currentSlide = nextSlide;
      } else {
        nextSlide = this.slides[0];
        nextSlide.classList.add('active');
        this.currentSlide = nextSlide;
      }
    }, this.interval);
    logit('slider.run()');
  }

  stop() {
    if (!this.timerId) return;

    clearInterval(this.timerId);
    this.state = 'stopped';
  }

  pause() {
    clearInterval(this.timerId);
    this.state = 'paused';
  }
}
