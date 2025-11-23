document.addEventListener('DOMContentLoaded', function() {
  const sliderList = document.querySelectorAll('.section-slider__slider');
  if(!!sliderList.length) {
    sliderList.forEach(slider => {
      const box = slider.closest('.section-slider__slider-box');
      const prevBtn = box.querySelector('.section-slider__slider-btn--prev');
      const nextBtn = box.querySelector('.section-slider__slider-btn--next');

      const slidesInitial = slider.classList.contains('section-slider__slider--cols-2')? 2 : 3;

      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 11,
        grabCursor: true,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: slidesInitial
          }
        }
      })
    })
  }
})