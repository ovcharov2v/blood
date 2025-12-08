document.addEventListener('DOMContentLoaded', () => {
  let swiper = null;

  const initSwiper = () => {
    if (window.innerWidth < 1024 && !swiper) {
      swiper = new Swiper('.section-myth__slider', {
        slidesPerView: 1.3,
        spaceBetween: 12,
        slideToClickedSlide: true,
        on: {
          transitionStart: () => {
            slides.forEach((el) => {
              el.classList.remove('section-myth__card--active')
            })
          }
        }
      });
    }
  };

  const destroySwiper = () => {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      initSwiper();
    } else {
      destroySwiper();
    }
  };

  // Инициализация при загрузке
  handleResize();

  // Пересчёт при ресайзе
  window.addEventListener('resize', handleResize);

  const slides = document.querySelectorAll('.section-myth__card')

  if(slides.length) {
    slides.forEach((slide) => {
      slide.addEventListener('click', () => {
        slides.forEach((el) => {
          if(el!==slide) {
            el.classList.remove('section-myth__card--active')
          }
        })
        slide.classList.toggle('section-myth__card--active')
      })
    })
  }
});