export default class ViewportObserver {
  constructor(handler, options) {
    this.observer = new IntersectionObserver(handler, options);
  }

  observeCollection(elements) {
    for (let elem of elements) {
      this.observer.observe(elem);
    }
  }

  observe(elem) {
    this.observer.observe(elem);
  }

  unobserve(elem) {
    this.observer.unobserve(elem);
  }
}
