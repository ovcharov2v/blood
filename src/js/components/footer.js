document.addEventListener('DOMContentLoaded', () => {
  const cols = document.querySelectorAll('.footer__nav-col');

  if (cols.length) {
    cols.forEach(col => {
      const title = col.querySelector('.footer__nav-title')
      title.addEventListener('click', () => {
        col.classList.toggle('footer__nav-col--open')
      })
    })
  }
})