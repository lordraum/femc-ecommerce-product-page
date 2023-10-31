const changeProductAmount = (controls, amountElm, stop) => {
  controls.addEventListener('click', (e) => {
    const controlType = e.target.dataset.type

    if (controlType === 'plus') {
      if (amountElm.textContent >= 0 && amountElm.textContent < stop) {
        amountElm.textContent++
      }
    }
    if (controlType === 'minus') {
      if (amountElm.textContent >= 1) {
        amountElm.textContent--
      }
    }
  })
}

export default changeProductAmount
