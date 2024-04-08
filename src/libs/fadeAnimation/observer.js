export default class Observer {
  constructor(callback, options) {
    this.observer = new IntersectionObserver(callback, options);
  }

  observe(targetElem) {
    this.observer.observe(targetElem);
  }

  unobserve(targetElem) {
    this.observer.unobserve(targetElem);
  }
}
