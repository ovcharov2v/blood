document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.section-article__news-slider');
  if(!!slider) {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.section-article__news-dots.slider-dots',
        clickable: true,
        bulletClass: 'slider-dots__el',
        bulletActiveClass: 'slider-dots__el--active',
      },
    })
  }
})