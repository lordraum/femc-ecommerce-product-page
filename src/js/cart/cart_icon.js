const renderCartIcon = (parent, btn) => {
  btn.addEventListener('click', (e) => {
    // eslint-disable-next-line no-undef
    const data = JSON.parse(localStorage.getItem('cartData'))
    e.preventDefault()
    parent.children.length > 2 && parent.removeChild(parent.firstChild)
    if (data) {
      if (data.length > 0) {
        const elm = document.createElement('SPAN')
        elm.classList.add('cart__count')
        elm.textContent = data.length
        parent.prepend(elm)
      }
    }
  })
}

export default renderCartIcon
