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
        //return (cada).restozero(p)
        return resto0(cada, matriz, p)
    })
}

while (achar_mdc(minha_lista, delta) == false) {
    //console.log('delta: ' + delta)
    //console.log(achar_mdc(minha_lista, delta))
    mdc = maior(minha_lista) - delta
    //console.log('mdc : ' + mdc)
    delta += 1
}

resposta = mdc - 1
console.log('maior elemento : ' + maior(minha_lista))
console.log('mdc: ' + resposta)

/*










*/




