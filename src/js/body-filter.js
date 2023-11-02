export const bodyFilter = (body) => {
  const bodyFilter = document.createElement('DIV')
  bodyFilter.classList.toggle('body-filter')
  body.prepend(bodyFilter)
}
