import Accordion from 'accordion-js';

const faqAcсordion = new Accordion('.acordion-list-faq', {
  duration: 400,
  showMultiple: true,
  elementClass: 'acordion-item-faq',
  triggerClass: 'block-faq',
  panelClass: 'text-faq',
});
