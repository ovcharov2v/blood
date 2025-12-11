document.addEventListener('DOMContentLoaded', function() {
  const sliderList = document.querySelectorAll('.section-slider__slider');
  if(!!sliderList.length) {
    sliderList.forEach(slider => {
      const box = slider.closest('.section-slider');
      const prevBtn = box.querySelector('.section-slider__slider-btn--prev');
      const nextBtn = box.querySelector('.section-slider__slider-btn--next');
      const dots = box.querySelector('.section-slider__dots');

      let slidesInitial =  3;

      if(slider.classList.contains('section-slider__slider--cols-2')) {
        slidesInitial = 2;
      }
      else if(slider.classList.contains('section-slider__slider--cols-4')) {
        slidesInitial = 4;
      }

      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 11,
        grabCursor: true,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: dots,
          clickable: true,
          bulletClass: 'slider-dots__el',
          bulletActiveClass: 'slider-dots__el--active',
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