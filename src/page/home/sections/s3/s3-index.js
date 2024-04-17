import { previewContainerHTML } from './preview-layout.js';
import previewManager from './preview/preview-manager.js';
import './s3.style.sass';

// Insert img-preview grid container
(() => {
  const sectionS3 = document.querySelector('.s3');
  if (!sectionS3) return;

  sectionS3.insertAdjacentHTML('beforebegin', previewContainerHTML);
})();

// Init preview manager
new previewManager();
