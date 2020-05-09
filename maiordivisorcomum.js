// mdc -> maior divisor comum
var delta = 0
var mdc = 0
var resposta = 0
const minha_lista = [20, 16, 60]  // 

function maior(matriz) {
    return matriz.reduce(function (a, b) {
        return Math.max(a, b)
    })
}

function resto0(numero, matriz, p) {
    if (numero % (maior(matriz) - p) == 0) {
        return true
    }
    else {
        return false
    }
}

function achar_mdc(matriz, p) {
    return (matriz).every((cada, indice) => {
        return resto0(cada, matriz, p)
    })
}

function tentativas(matriz, p) {
    while (achar_mdc(matriz, p) == false) {
        //console.log('delta: ' + p)
        //console.log(achar_mdc(matriz, p))
        mdc = maior(matriz) - p
        //console.log('mdc : ' + mdc)
        p += 1
    }
    return mdc 
}

tentativas(minha_lista, delta)

resposta = mdc - 1
console.log('maior elemento : ' + maior(minha_lista))
console.log('mdc: ' + resposta)