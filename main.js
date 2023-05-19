// Setup custom property that responds to scrolling

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll-y', window.scrollY)
})
