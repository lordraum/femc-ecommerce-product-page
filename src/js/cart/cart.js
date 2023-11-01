/* eslint-disable no-undef */
import cartHeader from './cart_header'
import cartBody from './cart_body'
import cartFooter from './cart_footer'
export let isActive = false

const renderCart = (parent, cartIcon) => {
  cartIcon.addEventListener('click', (e) => {
    const data = JSON.parse(localStorage.getItem('cartData'))
    const box = document.createElement('DIV')
    const header = cartHeader()
    const footer = cartFooter()
    const empty = document.createElement('DIV')
    empty.classList.add('cart__empty')

    box.classList.add('cart')

    if (!isActive) {
      box.append(header)

      if (!data || data.length === 0) {
        empty.textContent = 'Your cart is empty.'
        box.append(empty)
      } else {
        const body = cartBody(data)
        empty.remove()
        box.append(body, footer)
      }
      parent.append(box)
      // disparar evento personalizado
      isActive = true
    } else {
      parent.removeChild(parent.lastElementChild)
      isActive = false
    }
  })
}

export default renderCart
