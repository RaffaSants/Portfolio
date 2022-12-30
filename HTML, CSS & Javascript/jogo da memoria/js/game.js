const btn = document.getElementById('bt_start')
const modal = document.getElementById('md')
const cards = document.getElementsByClassName("card")
let cards_img= [
  "imgs/gato.png",
  "imgs/girafa.png",
  "imgs/gorila.png",
  "imgs/jacare.png",
  "imgs/orca.png",
  "imgs/panda.png",
  "imgs/papagaio.png",
  "imgs/rottweiler.png",
  "imgs/gato.png",
  "imgs/girafa.png",
  "imgs/gorila.png",
  "imgs/jacare.png",
  "imgs/orca.png",
  "imgs/panda.png",
  "imgs/papagaio.png",
  "imgs/rottweiler.png"
]
let player_moves = []
let selected_cards = []
let selected_pairs = 0
let player = 1
let is_Open = 'false'

btn.addEventListener('click', function(){
  shuffleCards()
  modal.classList.toggle("show")
  removeElements('text')
  player = 1
})
function shuffleCards(){
  cards_img.sort(function(){return 0.5 - Math.random()})
}
for( const i of cards){
  i.addEventListener('click', function played(){
    if(i.querySelector('img').getAttribute('open') == 'false'){
      openingCard(i.getAttribute('id'))
    }
  })
}
function openingCard(id){
  player_moves.push(id) 

  if (player_moves.length == 1){
    document.getElementById(id).classList.add('p'+ player)
    document.getElementById(id).querySelector('img').setAttribute('src',cards_img[id-1])
    document.getElementById(id).querySelector('img').setAttribute('open', 'true')
  }else if(player_moves.length == 2){
      document.getElementById(id).classList.add('p'+ player)
      document.getElementById(id).querySelector('img').setAttribute('src',cards_img[id-1])
      document.getElementById(id).querySelector('img').setAttribute('open', 'true')
      checkMove(player_moves)
  }
}
function checkMove(moves){

  let selected_cards =[]
  for(let move of moves){
    selected_cards.push(document.getElementById(move).querySelector('img').getAttribute('src'))
  }

  if(selected_cards[0]==selected_cards[1]){
    minicard = "<div class='col'> <div class='card col-md-4 card-mini' ><img src='" + selected_cards[0] + "' alt='' class='card-img'></div></div>"
    document.getElementById('player'+player).insertAdjacentHTML('beforeend', minicard)
    selected_pairs += 1
    selected_cards = []
    player_moves = []
    checkRound()  
  }
  else{
    setTimeout(() => {
      for(let i=0; i<selected_cards.length; i++){
        document.getElementById(moves[i]).querySelector('img').setAttribute('src','imgs/capa.png')
        document.getElementById(moves[i]).querySelector('img').setAttribute('open','false')
        document.getElementById(moves[i]).classList.remove('p'+ player)
      }
      nextPlayer(moves)
    }, 500);
  }
}
function nextPlayer(moves){
  selected_cards = []
  player_moves = []
  if(player == 1){
    player += 1
  }else{
    player -= 1 
  }
}
function checkRound(){
  if(selected_pairs==8){ 
    checkWin()
  }
}
function checkWin(){
  let score_Player1 = document.querySelectorAll('.scoreboard #player1 .card-mini').length
  let score_Player2 = document.querySelectorAll('.scoreboard #player2 .card-mini').length
  let text = document.getElementById('result')
  if(score_Player1 > score_Player2){
    text.insertAdjacentHTML('afterbegin',"<p id='text'>O jogador 1 venceu a partida!</p>")
  }else if(score_Player2 > score_Player1){
    text.insertAdjacentHTML('afterbegin',"<p id='text'>O jogador 2 venceu a partida!</p>" )
  }else{
    text.insertAdjacentHTML('afterbegin',"<p id='text'>Não houve vencedores nessa partida.</p>" )
  }
  modal.classList.toggle("show")
  cleanBoard()
  cleanScores()
  selected_pairs = 0
}
function cleanBoard(){
  for(const i of cards){
    i.classList.remove('p1','p2')
    i.querySelector('img').setAttribute('src', 'imgs/capa.png')
    i.querySelector('img').setAttribute('open', 'false')
  }
}
function cleanScores(){
  for(let i=1; i<3; i++){
    score = document.querySelectorAll(".scoreboard #player"+ i + " .col")
    for(minicard of score){
     minicard.parentNode.removeChild(minicard)
    }
  }
}
function removeElements(id){
  element_Remove = document.getElementById(id)
  element_Remove.parentNode.removeChild(element_Remove)
}