import showHiddenSections from './show-content.js';

const btn = document.querySelector('.js-scroll-down');

function autoScrollDown() {
  const targetElem = document.querySelector('.archive-tape');
  // const prevSection = targetElem.closest('section').previousElementSibling;

  // const prevElemBottomY = prevSection.getBoundingClientRect().bottom;
  // const targetElemTopY = targetElem.getBoundingClientRect().top;
  // const margin = targetElemTopY - prevElemBottomY;
  const elemHeight = targetElem.offsetHeight;

  // const stepScroll = elemHeight / 2 + margin;
  const stepScroll = elemHeight / 2;
  window.scrollBy({ top: stepScroll, behavior: 'smooth' });
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
