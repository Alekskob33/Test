export function initDefaultVideo(video) {
  video.muted = true;
  video.setAttribute('muted', true);

  video.setAttribute('playsinline', true);
  video.autoplay = true;
  video.loop = true;

  // video.play();
}
