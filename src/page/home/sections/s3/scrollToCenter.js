export function scrollToCenter(section) {
  const viewportHeight = window.innerHeight;
  const sectionRect = section.getBoundingClientRect();
  const sectionHeight = sectionRect.height;
  const sectionTop = sectionRect.top + window.scrollY;

  const scrollTo = sectionTop - viewportHeight / 2 + sectionHeight / 2;

  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth',
  });
}
