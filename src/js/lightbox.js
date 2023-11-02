import closeImg from '../images/icon-close-lightbox.svg'

const createLightbox = (prodImgElm) => {
  const lightbox = prodImgElm.cloneNode(true)
  const imgBox = lightbox.children[0]
  const image = imgBox.children[0].children[0]
  const arrows = imgBox.children[1]
  const thumbnails = imgBox.children[2]
  const close = document.createElement('IMG')
  close.src = closeImg

  lightbox.setAttribute('id', 'lightbox')
  lightbox.classList.add('lightbox')
  image.setAttribute('id', 'lightbox-image')
  arrows.setAttribute('id', 'lightbox-arrows')
  thumbnails.setAttribute('id', 'lightbox-thumbnails')

  imgBox.prepend(close)

  return lightbox
}

export default createLightbox
