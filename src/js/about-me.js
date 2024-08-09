import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const aboutMeAccordion = new Accordion('.acordeon-list-about-me', {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],
  elementClass: 'acordeon-item-about-me',
  triggerClass: 'block-about-me',
  panelClass: 'js-acordion-panel',
});
