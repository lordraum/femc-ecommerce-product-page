import menuImg from '../images/icon-menu.svg'
import closeImg from '../images/icon-close.svg'
import { bodyFilter } from './body-filter'

const toggleMenu = (toggle, menu, menuClass, body) => {
  toggle.addEventListener('click', () => {
    menu.classList.toggle(menuClass)
    if (menu.classList.contains('menu--active')) {
      toggle.src = closeImg
      bodyFilter(body, 'body-filter')
    } else {
      body.removeChild(body.firstChild)
      toggle.src = menuImg
    }
  })
}

export default toggleMenu
