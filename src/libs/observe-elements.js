export function observeElements(elements, { onAppear, onDisappear, options }) {
  if (!elements.length) elements = [elements];
  if (![...elements].every((elem) => elem instanceof HTMLElement)) {
    return console.log('No elements to observe');
  }

  // Init observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onAppear(entry.target);
      } else {
        onDisappear(entry.target);
      }
    });
  }, options);

  // Start observing
  elements.forEach((elem) => observer.observe(elem));

  // Return the observer
  return observer;
}
