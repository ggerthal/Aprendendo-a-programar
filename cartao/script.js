const campNome = document.getElementById("nome")
const cardNome = document.getElementById("momeCartao")

campNome.addEventListener("input", (event) => {
    const valorNome = event.target.value || "Nome do titular"
    
    cardNome.textContent = valorNome
})

const campNumero = document.getElementById("numero")
const cardNumero = document.getElementById("numeroCartao")

campNumero.addEventListener("input", (event) => {
    const valorNumero = event.target.value || "0000 0000 0000 0000"

    cardNumero.textContent = valorNumero 
})

const campValidade = document.getElementById("validade")
const cardValidade = document.getElementById("validadeCartao")

campValidade.addEventListener("input", (event) => {
    const valorValdade = event.target.value  || "00/00"

    cardValidade.textContent = valorValdade
})

const campSenha = document.getElementById("senha")
const cardSenha = document.getElementById("senhaCartao")

campSenha.addEventListener("input", (event) => {
    const valorSenha = event.target.value || "0000"

    cardSenha.textContent = valorSenha
})

// Vetificação de preenchimento
if (campNome.textContent == "" ) {
    cardNome.textContent = "Nome do titular"
    }

if (campNumero.textContent == "" ) {
    cardNumero.textContent = "0000 0000 0000 0000"
    }

if (campValidade.textContent == "" ) {
    cardValidade.textContent = "00/00"
    }

if (campSenha.textContent == "" ) {
    cardSenha.textContent = "0000"
    }