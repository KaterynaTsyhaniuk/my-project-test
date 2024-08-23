import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';

const urlApi = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewList = document.querySelector('.reviews-list');
const prevbtnEl = document.querySelector('.reviews-button-prev');
const nextbtnEl = document.querySelector('.reviews-button-next');

const fetchReviews = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Sorry, something went wrong. Please try again later.',
    });
    console.error('Data upload error:', error);

    return [];
  }
};
fetchReviews(urlApi).then(reviews => {
  // console.log('Отримані відгуки:', reviews);
  if (reviews.length === 0) {
    reviewList.innerHTML = '<p>Not found</p>';
  } else {
    reviewList.innerHTML = createReviewsList(reviews);
  }
  const reviewsSwiper = new Swiper('.swiper-reviews', {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    touch: true,
    wrapperClass: 'reviews-list',
    slideClass: 'reviews-item',
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
});

const createReviewsList = reviews => {
  return reviews
    .map(
      reviewData =>
        `<li class="reviews-item" id="${
          reviewData._id - 1
        }"><img class="reviews-avatar" alt="${reviewData.author}" src="${
          reviewData.avatar_url
        }" /><h3 class="reviews-name">${reviewData.author}</h3>
      <p class="reviews-text">${reviewData.review}</p></li>`
    )
    .join('');
};
