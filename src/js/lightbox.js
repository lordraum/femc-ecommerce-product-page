import closeImg from '../images/icon-close-lightbox.svg'
import { changeProductImageDesktop, changeProductImageMobile } from './change_product_image'

export const createLightBox = (prodImgElm, parent) => {
  const lightBox = prodImgElm.cloneNode(true)
  const imgBox = lightBox.children[0]
  const image = imgBox.children[0]
  const arrows = imgBox.children[1]
  const thumbnails = lightBox.children[1]
  const close = document.createElement('IMG')
  close.src = closeImg

  lightBox.setAttribute('id', 'lightbox')
  lightBox.classList.add('lightbox')
  image.setAttribute('id', 'lightbox-image')
  arrows.setAttribute('id', 'lightbox-arrows')
  thumbnails.setAttribute('id', 'lightbox-thumbnails')
  close.setAttribute('id', 'close-lightbox')

  imgBox.prepend(close)

  parent.append(lightBox)
}

export const closeLightBox = (body) => {
  const close = document.getElementById('close-lightbox')
  const lightBox = document.getElementById('lightbox')
  close.addEventListener('click', (e) => {
    lightBox.remove()
    body.removeChild(body.firstChild)
  })
}

export const changeImageLightBox = () => {
  const lightBoxImage = document.getElementById('lightbox-image')
  const lightBoxArrows = document.getElementById('lightbox-arrows')
  const lightBoxThumbnails = document.getElementById('lightbox-thumbnails')
  changeProductImageMobile(lightBoxArrows, lightBoxThumbnails)
  changeProductImageDesktop(lightBoxThumbnails, lightBoxImage)
}
