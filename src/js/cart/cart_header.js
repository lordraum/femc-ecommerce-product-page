const cartHeader = () => {
  const title = document.createElement('DIV')
  title.textContent = 'Cart'
  title.classList.add('cart__title')
  return title
}

export default cartHeader
