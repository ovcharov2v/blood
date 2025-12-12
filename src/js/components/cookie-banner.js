document.addEventListener('DOMContentLoaded', () => {
  const cookieMessage = document.querySelector('.cookie-banner')
  const cookieAcceptBtn = cookieMessage.querySelector('.cookie-banner__accept-btn')
  const cookieCloseBtn = cookieMessage.querySelector('.cookie-banner__close-btn')

  const accept_terms = sessionStorage.getItem('cookie__accept_terms')

  if(cookieMessage && accept_terms !== 'true') {
    cookieMessage.style.display = 'block';
  }

  if(cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', () => {
      sessionStorage.setItem('cookie__accept_terms', 'true')
      cookieMessage.style.display = 'none'
    })
  }

  if(cookieCloseBtn) {
    cookieCloseBtn.addEventListener('click', () => {
      cookieMessage.style.display = 'none'
    })
  }
})