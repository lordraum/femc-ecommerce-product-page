let carCount = 0

const cartHeader = () => {
  const title = document.createElement('DIV')
  title.textContent = 'Cart'
  return title
}

const imgCol = () => {
  const box = document.createElement('DIV')
  const img = document.createElement('IMG')
  img.attributes.src.value = './src/images/image-product-1-thumbnail.jpg'
  box.append(img)
  return box
}

const infoCol = (title, priceValue, amountValue, hasDiscount, discountValue) => {
  const box = document.createElement('DIV')
  const rowOne = document.createElement('DIV')
  const rowTwo = document.createElement('DIV')
  const infoTitle = document.createElement('DIV')
  const priceAndAmount = document.createElement('SPAN')
  const total = document.createElement('SPAN')

  infoTitle.textContent = title
  rowOne.append(title)

  priceAndAmount.textContent = `$ ${priceValue}.00 x ${amountValue}`
  total.textContent = !hasDiscount ? `$ ${priceValue * priceAndAmount}.00` : `$ ${priceValue * discountValue / 100}.00`

  rowTwo.append(priceAndAmount, total)

  box.append(rowOne, rowTwo)

  return box
}

const pruebaInfoCol = infoCol('Zapatos', 100, 2, true, 25)

console.log(pruebaInfoCol.children[0])
console.log(pruebaInfoCol.children[1])

const cardBody = () => {
  const box = document.createElement('DIV')
  if (carCount === 0) {
    box.textContent = 'Your car is empty'
    return box
  }
  if (carCount > 0) {
    return 'algo'
  }
}

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
