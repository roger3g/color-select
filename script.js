window.addEventListener('load', () => {
  const Rrange = document.querySelector('#r-range')
  const Grange = document.querySelector('#g-range')
  const Brange = document.querySelector('#b-range')

  const outputColors = document.querySelector('#output-colors')
  const copy = document.querySelector('#copy')

  Rrange.addEventListener('change', ()=> {
    chageColor(Rrange.value, Grange.value, Brange.value)
  })

  Grange.addEventListener('change', ()=> {
    chageColor(Rrange.value, Grange.value, Brange.value)
  })

  Brange.addEventListener('change', ()=> {
    chageColor(Rrange.value, Grange.value, Brange.value)
  })

  const chageColor = (colorRed, colorGreen, colorBlue) => {
    outputColors.style.backgroundColor = `rgb(${colorRed},${colorGreen},${colorBlue})`
    copy.innerHTML = `rgb(${colorRed},${colorGreen},${colorBlue})`
  }
})