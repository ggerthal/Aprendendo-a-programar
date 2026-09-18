
// Função recursiva de fatorial
function fatorial (num) {
    if (num < 2) {
        return 1
    }
    else {
        return num + fatorial(num-1)
    }
}

// função de area do circulo
function areaCirculo(raio) {
    const pi = 3.14
    return pi*(raio**2)
}

// função volume cilindro
function volCilindro (raio, altura) {
    return altura * areaCirculo(raio)
}

// Funcão para baskara
function calcBaskara (a, b, c) {
    let delta = b ** 2 - 4*(a*c)
    let raiz = Math.sqrt(delta)
    // x positivo
    let xP = (b*-1 + raiz)/(2*a)
    // x negativo
    let xN = (b*-1 - raiz)/(2*a)

    return [xP, xN] 
}

// função da se de fib
function seqFobonatt(num) {
    let ant = 0
    let post = 1
    let aux = 0
    while (num > 0) {
        console.log(ant)
        aux = post
        post = ant+post
        ant = aux
        num--
    }



}

let n = 5
let x1

x1 = calcBaskara(1, -5, 6)

console.clear()
console.log(fatorial(n))
console.log(areaCirculo(n))
console.log(volCilindro(n, 3))

// Lembrar de não printar procedimentos kkkkkkkkk
seqFobonatt(n)

console.log(x1)