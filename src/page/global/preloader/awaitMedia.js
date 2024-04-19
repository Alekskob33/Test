export const videoAwaiter = {
  duration: null,
  maxDelay: 2000, // ms
  timerId: null,

  awaitLoading(videoElements, { onProgress, onComplete }) {
    if (videoElements.length < 1) return onComplete();

    // Polling if video is ready
    this.timerId = setInterval(() => {
      this.duration += 100;

      if (this.duration > 100) {
        onProgress();
      }
      if (this.isCompleted(videoElements)) {
        if (this.duration <= 100 || this.duration >= this.maxDelay) {
          this.breakTimer();
          onComplete();
          return;
        }
      }
    }, 100);
  },

  breakTimer() {
    clearInterval(this.timerId);
  },

  isReady(video) {
    return video.readyState >= 2;
  },

  isCompleted(videoElements) {
    return [...videoElements].every((video) => this.isReady(video));
  },
};

/* 
await 500ms
check if all elements are loaded
if
yes: 
  a). skip preloader slides, hide preloader container,
  b). and animate first-screen elements (fadeIn: video, text/ move: tape)
no: 
  await loading at least 1.500ms from start
*/
