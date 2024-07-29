document.addEventListener('DOMContentLoaded', () => {
  const navMenuBtn = document.querySelector('.header-menu-btn');
  const navMenuList = document.querySelector('.header-menu-list');

  navMenuBtn.addEventListener('click', event => {
    event.stopPropagation();
    navMenuList.classList.toggle('visually-hidden');

    if (navMenuList.classList.contains('visually-hidden')) {
      navMenuList.removeAttribute('style');
    } else {
      navMenuList.style.opacity = '1';
    }
  });

  document.addEventListener('click', () => {
    navMenuList.classList.add('visually-hidden');
    navMenuList.removeAttribute('style');
  });
});

/* Back to Top button script */
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.back-to-top-btn')
    .addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;

    if (scrolled > 350) {
      document
        .querySelector('.back-to-top-btn')
        .classList.add('back-to-top-btn-active');
    } else {
      document
        .querySelector('.back-to-top-btn')
        .classList.remove('back-to-top-btn-active');
    }
  });
});
