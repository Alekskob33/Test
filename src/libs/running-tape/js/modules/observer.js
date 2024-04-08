export default class Observer {
  constructor(callback, options) {
    this.observer = new IntersectionObserver(callback, options);
  }

  observe(target) {
    this.observer.observe(target);
  }

  unobserve(target) {
    this.observer.unobserve(target);
  }
}
