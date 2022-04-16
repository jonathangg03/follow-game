const $elements = document.querySelectorAll('.element')
const $container = document.getElementById('container')
// let level = parseInt(
//   prompt('Ingresa el nivel en el que quieres jugar (debe ser un número)'),
//   10
// )

let level = 5

const order = []

for (let i = 0; i < level; i++) {
  const newValue = Math.floor(Math.random() * (9 - 0) + 0)
  order.push(newValue)
}

const actualArr = []

for (let i = 0; i < order.length; i++) {
  const ar = []
  for (let j = 0; j <= i; j++) {
    ar.push(order[j])
  }
  actualArr.push(ar)
}

let count = 0
let clickCount = 0

function activate(reference, counts = 0) {
  if (reference !== undefined) {
    if (counts < reference.length) {
      setTimeout(() => {
        $elements[reference[counts]].classList.add('active')
        setTimeout(() => {
          $elements[reference[counts]].classList.remove('active')
          count++
          activate(reference, count)
        }, 500)
      }, 800)
    } else {
      $container.addEventListener('click', handleRespond)
    }
  }
}
console.log(order)

function handleRespond(event) {
  this.removeEventListener('click', handleRespond)
  const actualTurn = count - 1
  console.log(actualTurn)
  let current = count
  count = 0
  activate(actualArr[current], count)
}

activate(actualArr[0])
