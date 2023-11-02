import productImage01 from '../images/image-product-1.jpg'
import productImage02 from '../images/image-product-2.jpg'
import productImage03 from '../images/image-product-3.jpg'
import productImage04 from '../images/image-product-4.jpg'

const productImages = [productImage01, productImage02, productImage03, productImage04]

export const changeProductImageMobile = (controls, image) => {
  // let currentImage = image.dataset.num
  // eslint-disable-next-line no-undef
  let currentImage = localStorage.getItem('current-image')
  controls.addEventListener('click', (e) => {
    const arrowType = e.target.dataset.type
    if (arrowType === 'next') {
      if (currentImage === productImages.length) {
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
  arr.forEach(x => x.setAttribute('data-active', `${x.children[0].dataset.key === key ? 1 : 0}`))
}
