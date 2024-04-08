export default class Observer {
  constructor(callback, options) {
    this.observer = new IntersectionObserver(callback, options);
  }

  observe(targetElem) {
    console.log('🚀 ~ targetElem:', targetElem);
    this.observer.observe(targetElem);
  }

  unobserve(targetElem) {
    this.observer.unobserve(targetElem);
  }
}
