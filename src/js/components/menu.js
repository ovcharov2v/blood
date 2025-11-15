document.addEventListener('DOMContentLoaded', () => {
  const menuTriggerList = document.querySelectorAll('.header__nav-link')

  if(menuTriggerList.length) {
    menuTriggerList.forEach(menuTrigger => {
      menuTrigger.addEventListener('click', () => {
        document.body.classList.toggle('menu-open')
      })
    })
  }
})