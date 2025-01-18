import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';

let videoElements = [...document.querySelectorAll('video')];
videoElements = videoElements.filter((video) => {
  const playBtn = video.closest('div').querySelector('.play-button');
  const stopBtn = video.closest('div').querySelector('.stop-button');
  return playBtn && stopBtn ? video : false;
});

// Video play/stop
function restartVideo(videoElem) {
  videoElem.muted = false;
  console.log(videoElem.muted);
  videoElem.currentTime = 0;
  videoElem.play();
}

function muteVideo(videoElem) {
  videoElem.muted = true;
}

// Controls (appear/disappear)
function showButton(buttonElem) {
  buttonElem.style.display = 'block';
  fadeIn(buttonElem, '300ms 10ms ease');
}
function hideButton(buttonElem) {
  fadeOut(buttonElem, '500ms 10ms ease-in');

  setTimeout(() => {
    buttonElem.style.display = 'none';
  }, 500);
}

// Handle click on controls
document.addEventListener('click', ({ target }) => {
  const playBtn = target.closest('.play-button');
  const stopBtn = target.closest('.stop-button');
  const videoElem = target.closest('div')?.querySelector('video');

  if (!videoElem) return;

  if (playBtn) {
    restartVideo(videoElem);
    hideButton(playBtn);
    scrollToCenter(videoElem);
    return;
  }
  if (stopBtn) {
    muteVideo(videoElem);
    hideButton(stopBtn);
    return;
  }
});

const delayTimer = 0;

videoElements.forEach((videoElem) => {
  const videoWrapper = videoElem.closest('div');
  let timerId;

  // Handle mouse-move (show stop-btn, and hide with delay)
  videoWrapper.addEventListener('mousemove', () => {
    const stopBtn = videoElem.closest('div').querySelector('.stop-button');
    if (!videoElem || !stopBtn) return;
    if (videoElem.muted) return;
    if (videoElem.paused) return;

    if (timerId) clearTimeout(timerId);
    showButton(stopBtn);

    timerId = setTimeout(() => {
      console.log(timerId);
      hideButton(stopBtn);
    }, 2000);
  });
  // Handle mouse-over (show play-btn)
  videoWrapper.addEventListener('mouseenter', () => {
    const playBtn = videoElem.closest('div').querySelector('.play-button');
    if (!videoElem || !playBtn) return;
    if (!videoElem.muted) return;

    console.log('mouse enter');
    showButton(playBtn);
  });
  // Handle mouse-leave (hide play-btn)
  videoWrapper.addEventListener('mouseleave', () => {
    const playBtn = videoElem.closest('div').querySelector('.play-button');

    console.log('mouse leave');
    hideButton(playBtn);
  });
});

function scrollToCenter(section) {
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
