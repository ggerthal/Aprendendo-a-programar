const jogo = document.querySelector("#jogo")
const barra = document.querySelector("#barra")
const pontosTexto = document.querySelector("#pontos")

let pontos = 0

let velBarra = 8

let esquerda = false
let direita = false

document.addEventListener("keydown",  (event) => {
    if (event.key === "a") {
        esquerda = true
    }

    if (event.key === "d") {
        direita = true
    }
})

document.addEventListener("keyup",  (event) => {
    if (event.key === "a") {
        esquerda = false
    }

    if (event.key === "d") {
        direita = false
    }
})

function moveBarra() {
    let x = barra.offsetLeft

    if (esquerda) {
        x -= velBarra
    }

    if (direita) {
        x += velBarra
    }

    if(x < 0) {
        x = 0
    }

    if (x > window.innerWidth) {
        x = window.innerWidth - barra.offsetWidth
    }
    barra.style.left = x + "px"
    barra.style.transform = "none"

    requestAnimationFrame(moveBarra)
}

function fazBola() {
    const bolinha = document.createElement("div")
    bolinha.classList.add("bolinha")

    jogo.appendChild(bolinha)

    const x = Math.random() * (window.innerHeight-25)

    bolinha.style.left = x + "px"

    let y = 0

    function cair() {
        y += 4

        bolinha.style.top = y + "px"

        const bolinhaRect = bolinha.getBoundingClientRect();
        const barraRect = barra.getBoundingClientRect();

        if(
            bolinhaRect.bottom >= barraRect.top && bolinhaRect.left < barraRect.right && bolinhaRect.right > barraRect.left
        ){
            pontos++

            pontosTexto.textContent = "Pontos: " + pontos

            bolinha.remove()

            return
        }
        
        if (y > window.innerHeight) {
            bolinha.remove()
    
            return
        }
        requestAnimationFrame(cair)
    }

    requestAnimationFrame(cair)
}

moveBarra()
setInterval(fazBola, 1000)