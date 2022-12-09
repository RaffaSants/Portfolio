
var buttons = document.getElementsByClassName("btn")
var visor = document.getElementById("visor")
console.log

for (const i  of buttons) {
  i.addEventListener('click', function(){
    let tipo = i.getAttribute("tipo")
    let valor = i.getAttribute("valor")
   
    if(tipo === 'number'){
      visor.value += valor
    } else if(tipo ==='action'){
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        visor.value += valor 
      } else if (valor === 'c'){
        visor.value = ""
      } else if (valor === '='){
        let resultado = eval(visor.value)
        visor.value = resultado
      }
    }
  })
}
