export function disableScroll() {
  document.body.style.height = 'var(--100vh, 100vh)';
  document.body.style.overflow = 'hidden';
}

export function enableScroll() {
  document.body.style.height = '';
  document.body.style.overflow = '';
}
