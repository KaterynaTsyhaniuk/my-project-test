'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formElem: document.querySelector('.footer-form'),
  inputMailElem: document.querySelector('.footer-form-input-mail'),
  inputCommentsElem: document.querySelector('.footer-form-input-comments'),
  spanValidElem: document.querySelector('.valid-notification'),
  backDropElem: document.querySelector('.footer-backdrop'),
  closeModalElem: document.querySelector('.footer-modal-close-btn'),
  contentBoxModalElem: document.querySelector('.modal-content-box'),
  formSubmitBtnElem: document.querySelector('.form-submit-btn'),
  loaderWrapElem: document.querySelector('.loader-wrap'),
};

// Завантаження даних з Local Storage при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  const email = loadFromLS('email');
  // const comments = loadFromLS('comments');
  if (email) {
    refs.formElem.elements.email.value = email;
    addEmailToList(email);
  }
  // if (comments) refs.formElem.elements.comments.value = comments;
});

// Валідація та обробка введення
refs.formElem.addEventListener('input', () => {
  checkInputValidity();
});

// Відправка форми
refs.formElem.addEventListener('submit', async event => {
  event.preventDefault();

  const email = refs.formElem.elements.email.value.trim();
  const comments = refs.formElem.elements.comments.value.trim();

  if (!refs.formElem.elements.email.validity.valid) {
    createErrorMailNotif();
    return;
  }

  saveToLS('email', email);
  // saveToLS('comments', comments);
  addEmailToList(email);

  const userInfo = { email, comment: comments };

  clearNotifField();
  showLoader();

  try {
    const response = await createRequest(userInfo);
    showModal(response.title, response.message);
    populateFormFromLocalStorage();
  } catch (error) {
    iziToast.error(iziToastErrorObj);
  } finally {
    hideLoader();
  }

  function populateFormFromLocalStorage() {
    const email = loadFromLS('email');
    // const comments = loadFromLS('comments');
    if (email) refs.formElem.elements.email.value = email;
    // if (comments) refs.formElem.elements.comments.value = comments;
    refs.formElem.reset();
  }
});

// Закриття модального вікна
refs.closeModalElem.addEventListener('click', closeModal);
refs.backDropElem.addEventListener('click', event => {
  if (event.currentTarget === event.target) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  refs.backDropElem.classList.add('is-hidden');
  refs.contentBoxModalElem.innerHTML = '';
  document.body.style.overflow = '';
}

// Допоміжні функції
function createRequest(data) {
  return fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

function showModal(title, message) {
  refs.contentBoxModalElem.innerHTML = `<h2 class="footer-modal-title">${title}</h2>
                                        <p class="footer-modal-text">${message}</p>`;
  refs.backDropElem.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : '';
}

function checkInputValidity() {
  const email = refs.formElem.elements.email.value.trim();
  const comments = refs.formElem.elements.comments.value.trim();

  if (!refs.formElem.elements.comments.validity.valid) {
    refs.formSubmitBtnElem.setAttribute('disabled', '');
    createErrorCommentsNotif();
  } else {
    refs.spanValidElem.textContent = 'Success!';
    refs.inputCommentsElem.classList.remove('input-error');
    refs.spanValidElem.classList.remove('notif-error');
    refs.inputCommentsElem.classList.add('input-success');
    refs.formSubmitBtnElem.removeAttribute('disabled', '');
  }
  if (!refs.formElem.elements.email.validity.valid) {
    refs.formSubmitBtnElem.setAttribute('disabled', '');
    createErrorMailNotif();
  } else {
    refs.spanValidElem.textContent = 'Success!';
    refs.inputMailElem.classList.remove('input-error');
    refs.spanValidElem.classList.remove('notif-error');
    refs.inputMailElem.classList.add('input-success');
    refs.formSubmitBtnElem.removeAttribute('disabled', '');
  }
}

function createErrorCommentsNotif() {
  refs.inputCommentsElem.classList.add('input-error');
  refs.spanValidElem.classList.add('notif-error');
  refs.spanValidElem.textContent = 'Please, fill the field';
}

function createErrorMailNotif() {
  refs.inputMailElem.classList.add('input-error');
  refs.spanValidElem.classList.add('notif-error');
  refs.spanValidElem.textContent = 'Invalid email, try again';
}

function clearNotifField() {
  refs.spanValidElem.textContent = '';
  refs.inputMailElem.classList.remove('input-success');
  refs.inputCommentsElem.classList.remove('input-success');
  refs.spanValidElem.classList.remove('notif-error');
}

function showLoader() {
  refs.loaderWrapElem.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loaderWrapElem.classList.add('is-hidden');
}

function addEmailToList(email) {
  const emailList = document.getElementById('email-list');
  const existingOption = [...emailList.options].find(
    option => option.value === email
  );

  if (!existingOption) {
    const option = document.createElement('option');
    option.value = email;
    emailList.appendChild(option);
  }
}

const iziToastErrorObj = {
  title: 'Error',
  message: 'Sorry, something went wrong...',
  backgroundColor: 'rgb(224, 55, 63)',
  titleColor: 'rgb(255, 255, 255)',
  messageColor: 'rgb(255, 255, 255)',
  theme: 'dark',
  progressBarColor: 'rgb(255, 255, 255)',
  position: 'bottomCenter',
};
