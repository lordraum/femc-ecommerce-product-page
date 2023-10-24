import 'normalize.css'
import changeProductImageMobile from './change_product_image'

// Interacciones
// Cambiar imagen según controles (mobile & desktop)
// Cambiar cantidad según controles

const imageControls = document.getElementById('arrows')

const productImage = document.getElementById('product__img')

changeProductImageMobile(imageControls, productImage, 4)
