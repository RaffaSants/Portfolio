const card_home = document.getElementById("home")
const bt_play = document.getElementById("play")

const turn = document.getElementById("turn")
const house = document.getElementsByClassName("house")

const card_end = document.getElementById("end")
const card_winner = document.getElementById("winner")
const card_draw = document. getElementById('draw')
const winner = document.getElementById("play-winner")
const bt_play_again= document.getElementById('play-again')

const img_turn_o = 'assets/circle-outline-16.ico'
const img_turn_x = 'assets/x-mark-16.ico'
const img_play_o = 'assets/circle-outline-64.ico'
const img_play_x = 'assets/x-mark-64.ico'

var turn_play = 'x'

bt_play.addEventListener("click", function(){
  card_home.classList.toggle("show")
  turn.setAttribute('src', img_turn_x)
})

for(const i of house){
  i.addEventListener('click',function(){
    let verific = i.getAttribute('jogada').length
    let img_house = i.querySelector('img')

    if(verific == 0 ){
      if(turn_play =="x"){
        i.setAttribute('jogada','x')
        img_house.setAttribute('src', img_play_x)
        turn.setAttribute('src', img_turn_o)
        turn_play = "o"
        CheckPlay(img_turn_x)
      }
      else if(turn_play =="o"){
        i.setAttribute('jogada', 'o')
        img_house.setAttribute('src', img_play_o)
        turn.setAttribute('src', img_turn_x)
        turn_play = 'x'
        CheckPlay(img_turn_o)
      }
    }
  })
}

async function CheckPlay(jogador){
  let A1 = document.getElementById('A1').getAttribute('jogada')
  let A2 = document.getElementById('A2').getAttribute('jogada')
  let A3 = document.getElementById('A3').getAttribute('jogada')

  let B1 = document.getElementById('B1').getAttribute('jogada')
  let B2 = document.getElementById('B2').getAttribute('jogada')
  let B3 = document.getElementById('B3').getAttribute('jogada')

  let C1 = document.getElementById('C1').getAttribute('jogada')
  let C2 = document.getElementById('C2').getAttribute('jogada')
  let C3 = document.getElementById('C3').getAttribute('jogada') 
 
  if(
    (A1 == B1 && A1 == C1 && A1 != '') ||
    (A1 == A2 && A1 == A3 && A1 != '') ||
    (A1 == B2 && A1 == C3 && A1 != '') ||
    (B2 == A2 && B2 == C2 && B2 != '') ||
    (B2 == B1 && B2 == B3 && B2 != '') ||
    (B2 == C1 && B2 == A3 && B2 != '') ||
    (C1 == C2 && C1 == C3 && C1 != '') ||
    (C3 == B3 && C3 == A3 && C3 != '')
  ){
    winner.setAttribute('src', jogador)
    card_winner.classList.add('show')
    card_end.classList.add("show")
  }
  else if (
    (A1 != '' && A2 != '' && A3 != '' &&
    B1 != '' && B2 != '' && B3 != '' &&
    C1 != '' && C2 != '' && C3 != '')
  ){
    card_draw.classList.add("show")
    card_end.classList.add("show")
  }
}

bt_play_again.addEventListener('click', function(){
  for (let i = 0; i < house.length; i++) { 
    house[i].childNodes[1].setAttribute('src','')
    house[i].setAttribute('jogada','')
    turn_play = 'x'
    turn.setAttribute('src', img_turn_x)
    card_end.classList.remove("show")
    card_winner.classList.remove("show")
    card_draw.classList.remove("show")
  }
})