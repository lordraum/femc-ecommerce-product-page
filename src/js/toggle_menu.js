import menuImg from '../images/icon-menu.svg'
import closeImg from '../images/icon-close.svg'

const toggleMenu = (toggle, menu, menuClass, body) => {
  toggle.addEventListener('click', (_) => {
    const bodyFilter = document.createElement('DIV')
    menu.classList.toggle(menuClass)
    if (menu.classList.contains('menu--active')) {
      bodyFilter.classList.toggle('body-filter')
      body.prepend(bodyFilter)
      toggle.src = closeImg
    } else {
      body.removeChild(body.firstChild)
      toggle.src = menuImg
    }
  })
}

export default toggleMenu
