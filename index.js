const $elements = document.querySelectorAll('.element')
const $container = document.getElementById('container')
// let level = parseInt(
//   prompt('Ingresa el nivel en el que quieres jugar (debe ser un número)'),
//   10
// )

const level = 1

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
let turnCounts = 0
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
        }, 800)
      }, 800)
    } else {
      console.log('entro')
      $container.addEventListener('click', handleRespond)
    }
  } else {
    //Victoria!!
  }
}
console.log(order)

function handleRespond(event) {
  setTimeout(() => {
    event.target.classList.remove('elementActive')
  }, 300)
  this.removeEventListener('click', handleRespond)
  event.target.classList.add('elementActive')

  const actualTurn = count - 1
  if (parseInt(event.target.id) === actualArr[actualTurn][turnCounts]) {
    turnCounts++
    if (turnCounts === actualArr[actualTurn].length) {
      //Era el ultimo
      turnCounts = 0
      let current = count
      count = 0
      activate(actualArr[current], count)
    } else {
      activate(actualArr[actualTurn], count)
    }
  } else {
    alert('Perdio :(')
  }
}

activate(actualArr[0])
