document.addEventListener('DOMContentLoaded', () => {
  // mobile menu
  const burgerBtn = document.querySelector('.header__burger-btn');

  if(burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    })
  }

  const groups = document.querySelectorAll('.mobile-menu__nav-group');

  if (groups.length) {
    groups.forEach(group => {
      const title = group.querySelector('.mobile-menu__nav-group-link')
      title.addEventListener('click', () => {
        group.classList.toggle('mobile-menu__nav-group--open')
      })
    })
  }

  // city modal
  const cityBtnList = document.querySelectorAll('.header__city');
  const cityModal = document.querySelector('.city-search');

  if(cityBtnList.length && cityModal) {
    cityBtnList.forEach(btn => {
      btn.addEventListener('click', () => {
        cityModal.classList.toggle('city-search--open');
        if(window.innerWidth >= 1024) {
          const rect = btn.getBoundingClientRect();

          cityModal.style.top = (rect.bottom + window.scrollY + 10) + 'px';
          cityModal.style.left = (rect.left + window.scrollX) + 'px';
        }
        else {
          cityModal.style.top = ''
          cityModal.style.left = ''
        }
      })
    })

    const closeBtn = cityModal.querySelector('.city-search__close');
    closeBtn.addEventListener('click', () => {
      cityModal.classList.remove('city-search--open')
    })
  }

  // lk
  const lkMenuBtn = document.querySelector('.header__lk-menu-btn');
  const lkNavBtn = document.querySelector('.header__lk-nav-btn');
  const lkNavClose = document.querySelector('.lk__navbar-close');

  if(lkMenuBtn && lkNavBtn && lkNavClose) {
    lkMenuBtn.addEventListener('click', () => {
      document.body.classList.remove('lk-nav-open');
      document.body.classList.toggle('lk-menu-open');
    })
    lkNavBtn.addEventListener('click', () => {
      document.body.classList.remove('lk-menu-open');
      document.body.classList.toggle('lk-nav-open');
    })
    lkNavClose.addEventListener('click', () => {
      document.body.classList.remove('lk-nav-open');
    })
  }
})