/* eslint-disable no-undef */
import thumbnail from '../../images/image-product-1-thumbnail.jpg'
import deleteImg from '../../images/icon-delete.svg'

const cartBody = (data) => {
  const fragment = document.createDocumentFragment()
  const box = document.createElement('DIV')
  box.classList.add('cart__body')

  data.forEach((x, i) => {
    const row = document.createElement('DIV')
    row.classList.add('cart__product')
    row.append(imgCol(), infoCol(x), deleteCol(i))
    fragment.append(row)
  })

  box.append(fragment)
  return box
}

const imgCol = () => {
  const box = document.createElement('DIV')
  const img = document.createElement('IMG')
  img.src = thumbnail
  box.append(img)
  return box
}

const infoCol = ({ name, price, amount, hasDiscount, discount }) => {
  const box = document.createElement('DIV')
  const rowOne = document.createElement('DIV')
  const rowTwo = document.createElement('DIV')
  const title = document.createElement('DIV')
  const priceAndAmount = document.createElement('SPAN')
  const total = document.createElement('SPAN')
  const finalPrice = !hasDiscount ? price : price * discount / 100

  title.classList.add('cart__product-title')

  title.textContent = name
  priceAndAmount.textContent = `$ ${finalPrice}.00 x ${amount}`
  total.textContent = `$ ${finalPrice * amount}.00`

  rowOne.append(title)
  rowTwo.append(priceAndAmount, total)

  box.append(rowOne, rowTwo)

  return box
}

const deleteCol = (v) => {
  const box = document.createElement('DIV')
  const elm = document.createElement('IMG')
  elm.src = deleteImg
  elm.setAttribute('data-key', v)
  box.append(elm)
  return box
}

export default cartBody
