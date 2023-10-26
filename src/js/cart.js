let carCount = 0

export const RenderCartCount = (parent, btn, amountElm) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    parent.children.length > 2 && parent.removeChild(parent.firstChild)
    if (parseInt(amountElm.textContent) > 0) {
      carCount++
      const elm = document.createElement('SPAN')
      elm.classList.add('cart__count')
      elm.textContent = carCount
      parent.prepend(elm)
    }
  })
}
