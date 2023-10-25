const changeProductAmount = (controls, amountElm, stop) => {
  let amount = parseInt(amountElm.textContent)
  controls.addEventListener('click', (e) => {
    const controlType = e.target.dataset.type

    if (controlType === 'plus') {
      if (amount >= 0 && amount < stop) {
        amount++
        amountElm.textContent = amount
      }
    }
    if (controlType === 'minus') {
      if (amount >= 1) {
        amount--
        amountElm.textContent = amount
      }
    }
  })
}

export default changeProductAmount
