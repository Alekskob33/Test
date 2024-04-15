export const imgSlider = {
  container: null,
  slides: null,

  timerId: null,
  interval: 1000, // ms

  currentSlide: null,
  state: 'paused',

  initSlider(container) {
    if (!(container instanceof HTMLElement)) return;

    this.container = container;
    this.slides = [...this.container.children] || [];
    this.currentSlide = container.querySelector('.active') || this.slides[0];

    return this;
  },

  get canRun() {
    return this.slides.length > 0 && this.state !== 'playing';
  },

  run() {
    if (!this.canRun) return;

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
  },

  stop() {
    clearInterval(this.timerId);
    this.state = 'stopped';
  },

  pause() {
    clearInterval(this.timerId);
    this.state = 'paused';
  },
};
