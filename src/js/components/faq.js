document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.section-faq__grid');
  if (!grid) return;

  const items = grid.querySelectorAll('.section-faq__item');
  if (items.length === 0) return;

  const col1 = document.createElement('div');
  const col2 = document.createElement('div');
  col1.className = 'section-faq__col';
  col2.className = 'section-faq__col';

  const itemsCount = items.length;
  const itemsPerCol = Math.ceil(itemsCount / 2);

  const fragment1 = document.createDocumentFragment();
  const fragment2 = document.createDocumentFragment();

  Array.from(items).forEach((item, index) => {
    if (index < itemsPerCol) {
      fragment1.appendChild(item.cloneNode(true));
    } else {
      fragment2.appendChild(item.cloneNode(true));
    }
  });

  col1.appendChild(fragment1);
  col2.appendChild(fragment2);

  grid.innerHTML = '';
  grid.appendChild(col1);
  grid.appendChild(col2);
});

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