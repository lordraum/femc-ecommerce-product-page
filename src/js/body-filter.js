export const bodyFilter = (body, className) => {
  const bodyFilter = document.createElement('DIV')
  bodyFilter.classList.toggle(className)
  body.prepend(bodyFilter)
}
