import productImage01 from '../images/image-product-1.jpg'
import productImage02 from '../images/image-product-2.jpg'
import productImage03 from '../images/image-product-3.jpg'
import productImage04 from '../images/image-product-4.jpg'

const productImages = [productImage01, productImage02, productImage03, productImage04]

export const changeProductImageMobile = (controls, image, num) => {
  let currentImage = parseInt(image.dataset.num)
  controls.addEventListener('click', (e) => {
    const arrowType = e.target.dataset.type
    if (arrowType === 'next') {
      if (currentImage === num) {
        image.src = productImage01
        currentImage = 1
      } else {
        image.src = productImages[currentImage]
        currentImage++
      }
    }
    if (arrowType === 'previous') {
      if (currentImage === 1) {
        image.src = productImage04
        currentImage = 4
      } else {
        image.src = productImages[currentImage - 2]
        currentImage--
      }
    }
  })
}
