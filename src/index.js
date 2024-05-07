import { logit } from './page/global/preloader/logit.js';
window.onerror = (error) => {
  logit('error', error);
};
logit('logging starts');

import './style.sass';

/* Global */
import './page/global/auto-fade-text.js';
import './page/global/auto-stop-videos.js';
import './page/global/setVh.js';

/* Preloader */
import './page/global/preloader/page-preloader.js';

/* Home */
// import './page/home/sections/s1/module.js';
// import './page/home/sections/s2/s2-index.js';
// import './page/home/sections/s3/s3-index.js';
// import './page/home/sections/s4/s4-index.js';
// import './page/home/sections/s5/s5-index.js';
// import './page/home/sections/s6/s6-index.js';
// import './page/home/sections/s7/s7-index.js';
// import './page/home/sections/s8/s8-index.js';

/* Case Study */
// import './page/second-page/sections/header/ps1-index.js';
// import './page/second-page/sections/brief/ps2-index.js';
// import './page/second-page/sections/article/ps3-index.js';
// import './page/second-page/sections/footer/footer.js';
