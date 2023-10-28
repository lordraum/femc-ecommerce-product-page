export let cartCount = 0

export const RenderCartCount = (parent, btn, amountElm) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    parent.children.length > 2 && parent.removeChild(parent.firstChild)
    if (parseInt(amountElm.textContent) > 0) {
      cartCount++
      const elm = document.createElement('SPAN')
      elm.classList.add('cart__count')
      elm.textContent = cartCount
      parent.prepend(elm)
    }
  })
}
