/* eslint-disable no-undef */
import 'normalize.css'
import { changeProductImageMobile, changeProductImageDesktop } from './change_product_image'
import changeProductAmount from './change_product_amount'
import toggleMenu from './toggle_menu'
import { renderPrice } from './render_price'
import product from './product'
import renderCartIcon from './cart/cart_icon'
import renderCart from './cart/cart'
import deleteProduct from './cart/delete_product'

const imageControls = document.getElementById('arrows')
const productImage = document.getElementById('product__img')
const thumbNails = document.getElementById('thumbnails')
const amountControls = document.getElementById('amount-controls')
const amountProducts = document.getElementById('amount-products')
const toggle = document.getElementById('toggle-menu')
const menu = document.getElementById('menu')
const priceElm = document.getElementById('price-elm')
const cartBox = document.getElementById('cart-box')
const cartButton = document.getElementById('cart-button')
const cartIcon = document.getElementById('cart-icon')
const body = document.getElementById('body')
const section = document.getElementById('section')
const thumbnails = document.getElementById('thumbnails')

const reset = thumbNails.children.length
const stock = 12
const menuClass = 'menu--active'

window.addEventListener('load', (_) => cartButton.click())

const productData = []

cartButton.addEventListener('click', (e) => {
  if (amountProducts.textContent > 0) {
    productData.push({
      name: product.name,
      price: product.price,
      amount: amountProducts.textContent,
      hasDiscount: product.hasDiscount,
      discount: product.discount
    })
    localStorage.setItem('cartData', JSON.stringify(productData))
  }
  amountProducts.textContent = 0
})

changeProductImageMobile(imageControls, productImage, reset)
changeProductImageDesktop(thumbnails, productImage)
changeProductAmount(amountControls, amountProducts, stock)
toggleMenu(toggle, menu, menuClass, body)
renderPrice(priceElm, product.price, product.hasDiscount, product.discount)
renderCartIcon(cartBox, cartButton)
renderCart(section, cartIcon)
deleteProduct(section, cartButton, cartIcon)

localStorage.clear()
