export function disableAccessTo(elements) {
  elements.forEach((element) => {
    element.classList.add('inaccessible');
  });
}

export function enableAccessTo(elements) {
  elements.forEach((element) => {
    if (element instanceof HTMLElement)
      element.classList.remove('inaccessible');
  });
}
