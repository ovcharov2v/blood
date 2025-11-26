document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.section-donor-code__slider');
  if(!!slider) {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.section-donor-code__slider-dots.slider-dots',
        clickable: true,
        bulletClass: 'slider-dots__el',
        bulletActiveClass: 'slider-dots__el--active',
      },
    })
  }
})