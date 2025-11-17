document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.section-slider__slider');
  if(slider) {
    new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 11,
      grabCursor: true,
      navigation: {
        nextEl: '.section-slider__slider-btn--next',
        prevEl: '.section-slider__slider-btn--prev',
      }
    })
  }
})