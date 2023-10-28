import thumbnail from '../../images/image-product-1-thumbnail.jpg'

const cartBody = () => {
  const box = document.createElement('DIV')
  const img = imgCol()
  box.append(img)
  return box
}

const imgCol = () => {
  const box = document.createElement('DIV')
  const img = document.createElement('IMG')
  img.src = thumbnail
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

const deleteCol = () => {
  const box = document.createElement('DIV')
  const elm = document.createElement('IMG')
  elm.src = deleteImg
  box.append(elm)
  return box
}

export default cartBody
