var direita = window.document.getElementById("setaDireita")
var esquerda = window.document.getElementById("setaEsquerda")
var card1 =  window.document.getElementById("card1")
var card2 = window.document.getElementById("card2")
var card3 = window.document.getElementById("card3")

function RodarParaDireita(){
    card1.style = "display:none"
    card3.style = "display:flex"
    direita.style = "display:none"
    esquerda.style = "display:flex; margin-top:65px"
}

function RodarParaEsquerda(){
    
    card1.style = "display:flex"
    card3.style = "display:none"
    direita.style = "display:flex"
    esquerda.style = "display:none"
}