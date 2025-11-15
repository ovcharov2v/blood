document.addEventListener('DOMContentLoaded', () => {
  const passwordToggles = document.querySelectorAll('.form-group__btn--password-toggle');

  if(!!passwordToggles.length) {
    const normalText = 'Показать текст пароля';
    const activeText = 'Скрыть текст пароля';

    passwordToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const wrapper = toggle.closest('.form-group__input-box');
        const input = wrapper.querySelector('.form-group__input');

        if (input.type === 'password') {
          input.type = 'text';
          toggle.classList.add('form-group__btn--active');
          toggle.setAttribute('aria-label', activeText);
          toggle.setAttribute('title', activeText);
        } else {
          input.type = 'password';
          toggle.classList.remove('form-group__btn--active');
          toggle.setAttribute('aria-label', normalText);
          toggle.setAttribute('title', normalText);
        }
      });
    });
  }
});
