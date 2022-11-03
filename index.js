const convButton = document.querySelector('.conv')
const resetButton = document.querySelector('.reset')
const changeButton = document.querySelector('.change')
const result = document.querySelector('.result')
const one = document.querySelector('.one')
const two = document.querySelector('.two')



function convert() {

  if (one.textContent === '°C') {
    let changedInput = converter.value * 9 / 5 + 32
    result.textContent = `${converter.value} °C to ${changedInput.toFixed(1)} °F `
    converter.value = ''
  } else {
    let changedInput = (converter.value - 32) * 5 / 9
    result.textContent = `${converter.value} °F to ${changedInput.toFixed(1)} °C `
    converter.value = ''
  }
}

function numberCheck() {
  if (converter.value == '') {
    result.textContent = 'Podaj liczbę.'
  } else {
    convert()
}}


function change() {
  if (one.textContent === '°C') {
    one.textContent = '°F';
    two.textContent = '°C'
    result.textContent = ''
  } else {
    one.textContent = '°C';
    two.textContent = '°F'
    result.textContent = ''
  }
}


function reset() {
  window.location.reload()
}


convButton.addEventListener('click', numberCheck)
resetButton.addEventListener('click', reset)
changeButton.addEventListener('click', change)
