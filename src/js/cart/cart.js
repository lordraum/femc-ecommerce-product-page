/* import deleteImg from '../images/icon-delete.svg' */
import cartHeader from './cart_header'
import { cartCount } from '../cartCount'
import cartBody from './cart_body'

const box = document.createElement('DIV')
const header = cartHeader()
const body = cartBody()
const empty = document.createElement('DIV')
let isActive = false

export const cart = (parent, cartIcon) => {
  cartIcon.addEventListener('click', (e) => {
    if (!isActive) {
      box.append(header)

      if (cartCount < 1) {
        empty.textContent = 'The car is empty'
        box.append(empty)
      }

      if (cartCount > 0) {
        empty.remove()
        box.append(body)
      }
      parent.append(box)
      isActive = true
    } else {
      parent.removeChild(parent.lastElementChild)
      isActive = false
    }
  })
}
