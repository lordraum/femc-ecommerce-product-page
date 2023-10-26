const renderDiscount = (parent, value) => {
  const elm = document.createElement('SPAN')
  elm.classList.add('product__percentage')
  elm.textContent = `% ${value}`
  parent.append(elm)
}

const renderOldPrice = (parent, value) => {
  const box = document.createElement('DIV')
  const elm = document.createElement('SPAN')
  box.classList.add('product__pricing-second-row')
  elm.classList.add('old__price')
  elm.textContent = `$ ${value}.00`
  box.append(elm)
  parent.append(box)
}

export const renderPrice = (elm, price, hasDiscount, discount) => {
  if (hasDiscount) {
    elm.textContent = `$ ${price * discount / 100}.00`
    renderDiscount(elm.parentElement, discount)
    renderOldPrice(elm.parentElement.parentElement, price)
  }
}
