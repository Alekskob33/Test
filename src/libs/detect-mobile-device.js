function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobile = /Mobi|Android/i.test(userAgent);
  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 800 && window.innerHeight <= 600;

  return isMobile || isTouchDevice || isSmallScreen;
}

function detectMobile({ bodyClass } = { bodyClass: 'is-mobile' }) {
  if (isMobileDevice()) {
    document.body.classList.add('is-mobile');
  } else {
    document.body.classList.remove('is-mobile');
  }
}

// Initial check
detectMobile();

// Check on window resize
window.addEventListener('resize', detectMobile);

export function isMobile() {
  return document.body.matches('.is-mobile');
}
