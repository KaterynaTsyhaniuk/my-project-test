import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';

import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

Swiper.use([Navigation, Keyboard]);

const aboutMeSwiper = new Swiper('.about-skills-swiper', {
  loop: true,
  touch: true,
  spaceBetween: 0,
  slidesPerView: 2,
  direction: 'horizontal',
  slideClass: 'about-skills-circle',
  wrapperClass: 'about-skills-list',
  slideActiveClass: 'about-skills-circle-active',
  navigation: {
    nextEl: '.about-skills-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

const aboutMeAccordion = new Accordion('.acordeon-list-about-me', {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],
  elementClass: 'acordeon-item-about-me',
  triggerClass: 'block-about-me',
  panelClass: 'js-acordion-panel',
});
