import './s1.style.sass';
import FadeAnimationManager from '../../../../libs/fadeAnimation/animationManager.js';
import ShowcaseManager from './video/showcaseManager.js';

import './button-parallax.js';
import './autoScroll.js';

new FadeAnimationManager('.js-auto-fade');
new ShowcaseManager();
