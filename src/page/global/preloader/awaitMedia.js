import { isCorrectSource } from './check-source.js';

export const videoAwaiter = {
  duration: 0,
  maxDelay: 1500, // ms
  timerId: null,
  completeCounter: 0,

  isComplete(total) {
    return this.completeCounter === total;
  },

  awaitLoading(videoElements, { onProgress, onComplete }) {
    let totalLength = videoElements.length;
    const correctVideos = [];
    if (videoElements.length < 1) return onComplete();
    onProgress();

    const promises = [...videoElements].map((video) => {
      return isCorrectSource(video.src);
    });

    // Complete when all videos can play by now
    this.timerId = setInterval(() => {
      this.duration += 100;
      if (this.isComplete(totalLength)) {
        if (this.duration > this.maxDelay) {
          this.breakTimer();
          onComplete();
          return;
        }
      }
    }, 100);

    // Await all responds (and await for 'canplay')
    Promise.allSettled(promises).then((results) => {
      results.forEach((result, index) => {
        if (!result.value) return;
        correctVideos.push(videoElements[index]);
      });

      totalLength = correctVideos.length;

      // Handle 'canplay' status
      correctVideos.forEach((video) => {
        this.completeCounter++;
        // video.addEventListener(
        //   'loadedmetadata',
        //   () => {
        //   },
        //   { once: true }
        // );
      });
    });
  },

  breakTimer() {
    clearInterval(this.timerId);
  },
};
