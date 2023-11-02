import productImage01 from '../images/image-product-1.jpg'
import productImage02 from '../images/image-product-2.jpg'
import productImage03 from '../images/image-product-3.jpg'
import productImage04 from '../images/image-product-4.jpg'
const productImages = [productImage01, productImage02, productImage03, productImage04]

export const changeProductImageMobile = (controls, thumbnails) => {
  controls.addEventListener('click', (e) => {
    const arrowType = e.target.dataset.type
    // eslint-disable-next-line no-undef
    const currentImage = parseInt(localStorage.getItem('current-image'))
    if (arrowType === 'next') {
      const plusIndex = currentImage < productImages.length ? currentImage : 0
      thumbnails.children[parseInt(plusIndex)].children[0].click()
    }
    if (arrowType === 'previous') {
      const minusIndex = currentImage > 1 ? currentImage - 2 : productImages.length - 1

      thumbnails.children[parseInt(minusIndex)].children[0].click()
    }
  })
}

export const changeProductImageDesktop = (thumbnails, img) => {
  thumbnails.addEventListener('click', (e) => {
    if (e.target.src) {
      const key = e.target.dataset.key
      img.src = productImages[key]
      activeImage(thumbnails, key)
      // eslint-disable-next-line no-undef
      localStorage.setItem('current-image', parseInt(key) + 1)
    }
  })
}

const activeImage = (thumbnails, key) => {
  const arr = Array.from(thumbnails.children)
  arr.forEach(x => x.setAttribute('data-active', `${parseInt(x.children[0].dataset.key) === parseInt(key) ? 1 : 0}`))
}
