export function initDefaultVideo(video) {
  video.muted = true;
  video.setAttribute('muted', true);
  video.setAttribute('playsinline', true);
  video.setAttribute('autoplay', true);
  video.setAttribute('loop', true);
  video.play();
}
