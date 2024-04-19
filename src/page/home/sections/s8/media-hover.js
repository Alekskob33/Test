import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';

const mediaElements = document.querySelectorAll(
  '.archive-item img, .archive-item video'
);

/* HOVER behavior */

// Mouseenter
[...mediaElements].forEach((elem) => {
  elem.onmouseenter = () => {
    // Dim siblings
    dimElements([...mediaElements]);

    // Accent current-elem
    highlightCurrentElem(elem);
  };
});

// Mouseleave
[...mediaElements].forEach((elem) => {
  elem.onmouseleave = () => {
    // Show all media
    resetStyles([...mediaElements]);
  };
});

function highlightCurrentElem(elem) {
  elem.style.transition = 'all 200ms ease';
  elem.style.transform = 'scale(1.05)';
  elem.style.opacity = 1;
}

function resetStyles(mediaElements) {
  mediaElements.forEach((elem) => {
    elem.style.transition = 'transform 200ms 0ms, opacity 300ms';
    elem.style.transform = 'scale(1)';

    // Dim, if link 'visited'
    if (elem.closest('a').matches('.visited')) {
      elem.style.opacity = 0.2;
    } else {
      elem.style.opacity = 1;
    }
  });
}

function dimElements(mediaElements) {
  mediaElements.forEach((elem) => {
    // Dim all media-elements
    elem.style.transition = 'transform 200ms ease, opacity 300ms';
    // elem.style.transform = 'scale(0.8)';

    // if link 'visited'
    if (elem.closest('a').matches('.visited')) {
      elem.style.opacity = 0.2;
    } else {
      elem.style.opacity = 0.8;
    }
  });
}
