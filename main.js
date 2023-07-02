const lenis = new Lenis()

lenis.on('scroll', (e) => {
  document.body.style.setProperty('--scroll-y', e.animate.value)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
