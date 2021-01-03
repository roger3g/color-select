const Rrange = document.querySelector('#r-range')
const Grange = document.querySelector('#g-range')
const Brange = document.querySelector('#b-range')

const Rinput = document.querySelector('#r-input')
const Ginput = document.querySelector('#g-input')
const Binput = document.querySelector('#b-input')

const outputColors = document.querySelector('#output-colors')
const copy = document.querySelector('#copy')

const button = document.querySelector('button')

button.addEventListener('click', () => {

  if ( Rinput.value == '' || Ginput.value == '' || Binput.value == '' ) {
    chageColorRange(Rrange.value, Grange.value, Brange.value)
  } else {
    Rrange.value = '128'
    Grange.value = '128'
    Brange.value = '128'
    chageColorInput(Rinput.value, Ginput.value, Binput.value)
    Rinput.value = ''
    Ginput.value = ''
    Binput.value = ''
  }

})

function chageColorRange(r, g, b) {
  outputColors.style.backgroundColor = `rgb(${r},${g},${b})`
  copy.innerHTML = `rgb(${r},${g},${b})`
}

function chageColorInput(r, g, b) {
  if ( r > 255 || g > 255 || b > 255 ) {
    r = '255'
    g = '255'
    b = '255'
  } else if ( r < 0 || g < 0 || b < 0 ) {
    r = '0'
    g = '0'
    b = '0'
  }

  outputColors.style.backgroundColor = `rgb(${r},${g},${b})`
  copy.innerHTML = `rgb(${r},${g},${b})`
}