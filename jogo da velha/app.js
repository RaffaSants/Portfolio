/* botão iniciar*/
const game = document.querySelector('main #game')
const botton = document.querySelectorAll('main .botton')
var gameover = false

for (const element of botton) {
  element.addEventListener('click', function () {
    let bt = element.id
    console.log(bt)
    if (bt === 'start') {
      game.classList.add('play')
    } else {
      game.classList.remove('play')
    }
  })
}

/*tabuleiro*/

const played = document.querySelectorAll('div .house')
var ImageCircle = 'assets/circle-outline-64.ico'
var ImageX = 'assets/x-mark-64.ico'
var ImageCircle2 = 'assets/circle-outline-16.ico'
var Imagex2 = 'assets/x-mark-16.ico'
var house = document.querySelector('.house')
const playerTurn = document.querySelector('.title img')
var plays_x = ['x']
var plays_O = ['O']
var t = 1

for (const element of played) {
  element.addEventListener('click', function () {
    let verific = element.getAttribute('jogada').length
    let pichouse = element.querySelector('img')

    if (gameover) {
      return
    }
    if (verific > 0) {
    } else {
      if (t == 1) {
        element.setAttribute('jogada', 'x')
        pichouse.setAttribute('src', ImageX)
        PlayWinner()
        playerTurn.setAttribute('src', ImageCircle2)
        t = 2
      } else {
        element.setAttribute('jogada', 'O')
        pichouse.setAttribute('src', ImageCircle)
        PlayWinner()
        playerTurn.setAttribute('src', Imagex2)
        t = 1
      }
    }
  })
}

async function PlayWinner() {
  var a1 = document.getElementById('a1').getAttribute('jogada')
  var a2 = document.getElementById('a2').getAttribute('jogada')
  var a3 = document.getElementById('a3').getAttribute('jogada')
  var b1 = document.getElementById('b1').getAttribute('jogada')
  var b2 = document.getElementById('b2').getAttribute('jogada')
  var b3 = document.getElementById('b3').getAttribute('jogada')
  var c1 = document.getElementById('c1').getAttribute('jogada')
  var c2 = document.getElementById('c2').getAttribute('jogada')
  var c3 = document.getElementById('c3').getAttribute('jogada')

  var winner = ''

  if (
    (a1 == b1 && a1 == c1 && a1 != '') ||
    (a1 == a2 && a1 == a3 && a1 != '') ||
    (a1 == b2 && a1 == c3 && a1 != '')
  ) {
    winner = a1
  } else if (
    (b1 == b2 && b1 == b3 && b1 != '') ||
    (a2 == b2 && a2 == c2 && a2 != '') ||
    (c1 == b2 && c1 == a3 && c1 != '')
  ) {
    winner = b2
  } else if (
    (c1 == c2 && c1 == c3 && c1 != '') ||
    (c3 == b3 && c3 == a3 && c3 != '')
  ) {
    winner = c3
  }
  if (winner != '') {
    await sleep(50)
    gameover = true
    alert("O ganhador foi o:'" + winner + "'")
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
