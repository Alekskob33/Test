import showHiddenSections from './show-content.js';

const btn = document.querySelector('.js-scroll-down');

function autoScrollDown() {
  const targetElem = document.querySelector('.archive-tape');
  const tapeHeight = targetElem.offsetHeight;
  const stepScroll = tapeHeight / 2.0 + 20; // 20px -> body padding

  // Workaround for 'ease'-like scroll behavior
  document.body.style.transition = 'transform 500ms';
  document.body.style.transform = `translateY(${-stepScroll}px)`;
  setTimeout(() => {
    document.body.style.removeProperty('transition');
    document.body.style.removeProperty('transform');
    window.scrollBy(0, stepScroll);
  }, 500);
}

(() => {
  if (!btn) return;

  btn.addEventListener(
    'click',
    () => {
      showHiddenSections();
      autoScrollDown();
    },
    { once: true }
  );
})();
