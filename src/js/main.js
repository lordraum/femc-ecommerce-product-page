import 'normalize.css'
import { changeProductImageMobile } from './change_product_image'
import changeProductAmount from './change_product_amount'
import toggleMenu from './toggle_menu'

// Cambiar cantidad según controles

const imageControls = document.getElementById('arrows')
const productImage = document.getElementById('product__img')
const thumbNails = document.getElementById('thumbnails')
const amountControls = document.getElementById('amount-controls')
const amountProducts = document.getElementById('amount-products')
const toggle = document.getElementById('toggle-menu')
const menu = document.getElementById('menu')

const reset = thumbNails.children.length
const stock = 12
const menuClass = 'menu--active'

const body = document.getElementById('body')

changeProductImageMobile(imageControls, productImage, reset)
changeProductAmount(amountControls, amountProducts, stock)
toggleMenu(toggle, menu, menuClass, body)
