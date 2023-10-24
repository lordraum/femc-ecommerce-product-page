const changeProductImageMobile = (controls, image, num) => {
  let currentImage = parseInt(image.dataset.num)
  controls.addEventListener('click', (e) => {
    const arrowType = e.target.dataset.type
    if (arrowType === 'next') {
      if (currentImage === num) {
        image.attributes.src.value = './src/images/image-product-1.jpg'
        currentImage = 1
      } else {
        image.attributes.src.value = `./src/images/image-product-${currentImage + 1}.jpg`
        currentImage++
      }
    }
    if (arrowType === 'previous') {
      if (currentImage === 1) {
        image.attributes.src.value = './src/images/image-product-4.jpg'
        currentImage = 4
      } else {
        image.attributes.src.value = `./src/images/image-product-${currentImage - 1}.jpg`
        currentImage--
      }
    }
  })
}

export default changeProductImageMobile
