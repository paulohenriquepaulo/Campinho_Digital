const rs = require('readline-sync');
let arrayNumeros = [];
let contador = 0;

while (contador < 3) {
    let numeroExistente = false;
    let numero = parseInt(rs.question('\nInforme um numero: '));
    if (contador == 0) {
        arrayNumeros.push(numero);
        contador++;
    } else {
        for (i = 0; i < arrayNumeros.length; i++) {
            if (arrayNumeros[i] == numero) {
                console.log('\nValor já existente. ');
                numeroExistente = true;
                break;
            }
        }
        if (numeroExistente == false) {
            arrayNumeros.push(numero);
            contador++;
        }
    }
}
console.log('\nA ordem que foi inserido os numeros: ' + arrayNumeros);
console.log('A ordem depois de ordenar de forma crescente: ' + arrayNumeros.sort(function(a, b) {return a - b} ));
console.log('A ordem depois de ordenar de forma decrescente: ' + arrayNumeros.sort(function(a, b) {return b - a} ));

