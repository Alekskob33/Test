import './s1.style.sass';
import FadeAnimationManager from '../../../../libs/fadeAnimation/animationManager.js';
import './button-parallax.js';
// import './playVideo.js';
import './autoScroll.js';
import VideoManager from './video/videoManager.js';

new FadeAnimationManager('.js-auto-fade');

const smallVideo = document.querySelector('#small-video');
const mainVideo = document.querySelector('#main-video');

new VideoManager({ smallVideo, mainVideo });
