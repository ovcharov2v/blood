document.addEventListener('DOMContentLoaded', () => {
  const sliderEl = document.querySelector('.section-hero__slider');
  if(!sliderEl) return;

  let swiper = null;

  const initSwiper = () => {
    if (window.innerWidth < 1024 && !swiper) {
      swiper = new Swiper(sliderEl, {
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        pagination: {
          el: '.section-hero__slider-dots.slider-dots',
          clickable: true,
          bulletClass: 'slider-dots__el',
          bulletActiveClass: 'slider-dots__el--active',
        },
        on: {
          transitionStart: () => {
            slides.forEach((el) => {
              el.classList.remove('hero-card--active')
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

  const slides = document.querySelectorAll('.hero-card')

  if(slides.length) {
    slides.forEach((slide) => {
      slide.addEventListener('click', () => {
        slide.classList.toggle('hero-card--active')
      })
    })
  }
});