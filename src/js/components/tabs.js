document.addEventListener('DOMContentLoaded', () => {
  const tabsNavButtons = document.querySelectorAll('.tabs__nav-btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  tabsNavButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetContentId = button.getAttribute('data-content');
      const targetContent = document.getElementById(targetContentId);

      // Убираем активные классы
      tabsNavButtons.forEach((btn) => btn.classList.remove('tabs__nav-btn--active'));
      tabsContent.forEach((content) => {
        content.classList.remove('tabs__content--active');
      });

      // Добавляем активный класс с задержкой для анимации
      button.classList.add('tabs__nav-btn--active');

      // Устанавливаем высоту перед показом
      setTimeout(() => {
        targetContent.classList.add('tabs__content--active');
      }, 10);
    });
  });

  // select
  const selectList = document.querySelectorAll('.select[data-tabs]');
  if(selectList.length) {
    selectList.forEach((select) => {
      const tabsId = select.dataset.tabs;
      const tabs = document.getElementById(tabsId);
      const selectItems = select.querySelectorAll('.select__list-item[data-content]');
      if(selectItems.length) {
        selectItems.forEach((item) => {
          const tabBtn=tabs.querySelector(`.tabs__nav-btn[data-content=${item.dataset.content}]`);
          if(tabBtn){
            item.addEventListener('click', () => {
              tabBtn.dispatchEvent(new Event('click', {}));
            })
          }
        })
      }
  })}
});