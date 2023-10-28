import 'normalize.css'
import { changeProductImageMobile } from './change_product_image'
import changeProductAmount from './change_product_amount'
import toggleMenu from './toggle_menu'
import { renderPrice } from './render_price'
import product from './product'
import { RenderCartCount } from './cartCount'
import { cart } from './cart/cart'

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
const header = document.getElementById('header') /* Delete */

const reset = thumbNails.children.length
const stock = 12
const menuClass = 'menu--active'

const productData = []

cartButton.addEventListener('click', (e) => {
  if (amountProducts.textContent > 0) {
    productData.push({
      price: product.price,
      amount: amountProducts.textContent,
      hasDiscount: product.hasDiscount,
      discount: product.discount
    })
  }
})

console.log(productData)

changeProductImageMobile(imageControls, productImage, reset)
changeProductAmount(amountControls, amountProducts, stock)
toggleMenu(toggle, menu, menuClass, body)
renderPrice(priceElm, product.price, product.hasDiscount, product.discount)
RenderCartCount(cartBox, cartButton, amountProducts)
cart(header, cartIcon)
