document.addEventListener('DOMContentLoaded', () => {
  const itemList = document.querySelectorAll('.section-faq__item');

  if (itemList.length) {
    itemList.forEach(item => {
      const header = item.querySelector('.section-faq__item-question')
      header.addEventListener('click', () => {
        const activeItem = document.querySelector('.section-faq__item--active')
        if (activeItem && activeItem !== item) {
          activeItem.classList.remove('section-faq__item--active')
        }
        item.classList.toggle('section-faq__item--active')
      })
    })
  }
})