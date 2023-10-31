/* eslint-disable no-undef */
import cartHeader from './cart_header'
import cartBody from './cart_body'
let isActive = false

const renderCart = (parent, cartIcon) => {
  cartIcon.addEventListener('click', (e) => {
    const data = JSON.parse(localStorage.getItem('cartData'))
    const box = document.createElement('DIV')
    const header = cartHeader()
    const empty = document.createElement('DIV')

    if (!isActive) {
      box.append(header)

      if (!data) {
        empty.textContent = 'The car is empty'
        box.append(empty)
      } else {
        const body = cartBody(data)
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

export default renderCart
