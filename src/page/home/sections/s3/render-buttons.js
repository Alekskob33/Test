const playBtnHTML = `
  <button class="video-control play-button parallax-button">
    <svg
      class="svg-play"
      viewBox="0 0 244 303"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.24529 301.418V1.72695L242.198 151.573L1.24529 301.418Z"
        stroke="#3BFB2A"
      />
    </svg>
  </button>
`;

const stopBtnHTML = `
  <button class="video-control stop-button"></button>
`;

export function renderButtonsForVideo(videoElem) {
  videoElem.insertAdjacentHTML('afterend', playBtnHTML);
  videoElem.insertAdjacentHTML('afterend', stopBtnHTML);
}
