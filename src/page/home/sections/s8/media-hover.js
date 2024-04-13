import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';

const mediaElements = document.querySelectorAll(
  '.archive-item img, .archive-item video'
);

/* HOVER behavior */

// Mouseenter
[...mediaElements].forEach((elem) => {
  elem.onmouseenter = () => {
    hideAllMedia([...mediaElements]);

    // Show current-elem only
    fadeIn(elem, '300ms ease');
  };
});

// Mouseleave
[...mediaElements].forEach((elem) => {
  elem.onmouseleave = () => {
    // Show all media
    showAllMedia([...mediaElements]);
  };
});

function showAllMedia(mediaElements) {
  mediaElements.forEach((elem) => {
    fadeIn(elem, '300ms ease-in');

    // Dim, if link 'visited'
    if (elem.closest('a').matches('.visited')) {
      elem.style.opacity = 0.2;
    }
  });
}

function hideAllMedia(mediaElements) {
  mediaElements.forEach((elem) => {
    // Dim all media-elements
    fadeOut(elem, '300ms ease-out');
    elem.style.opacity = 0.2;
  });
}
