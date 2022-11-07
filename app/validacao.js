function verificaSeOchutePossuiUmValorValido() {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
       
    }
    
    if (numeroForMaiorOuMenorQueOvalorPermitido) {
        elementoChute.innerHTML += `<div>Fale um número entre:
        ${menorValor} e ${maiorValor}</div>`
       
    }

    if (numero === numeroScreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou!</h2>
            <h3>O número secreto era ${numeroScreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroScreto) {
        elementoChute.innerHTML += `
        <div>O número é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOvalorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
        if (e.target.id == 'jogar-novamente') {
            window.location.reload()
        }
})
