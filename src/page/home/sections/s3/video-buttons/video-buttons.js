import { fadeIn, fadeOut } from '../../../../../libs/fade-animation.js';

let timerID;

export function showButton(buttonElem) {
  buttonElem.style.display = 'block';
  fadeIn(buttonElem, '300ms 10ms ease');
}

export function hideButton(buttonElem) {
  fadeOut(buttonElem, '500ms 10ms ease-in');

  if (timerID) clearTimeout(timerID);

  timerID = setTimeout(() => {
    buttonElem.style.display = 'none';
  }, 500);
}

export function getButtons(videoElement) {
  const playBtn = videoElement.closest('div').querySelector('.play-button');
  const stopBtn = videoElement.closest('div').querySelector('.stop-button');

  return { playBtn, stopBtn };
}
