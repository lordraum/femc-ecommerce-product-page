const deleteProduct = (section, cartBtn, cartIcn) => {
  section.addEventListener('click', (e) => {
    const elm = e.target
    if (elm.src) {
      const ref = elm.src
      if (ref.includes('delete')) {
        const id = elm.dataset.key
        const data = JSON.parse(localStorage.getItem('cartData'))
        const newData = data.filter((_, i) => i !== parseInt(id))
        localStorage.setItem('cartData', JSON.stringify(newData))

        cartBtn.click()
        cartIcn.click()
      }
    }
  })
}

export default deleteProduct
