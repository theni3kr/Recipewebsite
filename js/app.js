const links = document.querySelector('.nav-links')
const navBtnDOM = document.querySelector('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = document.querySelector('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
