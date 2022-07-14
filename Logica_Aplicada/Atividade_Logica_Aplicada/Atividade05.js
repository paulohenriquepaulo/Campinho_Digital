const rs = require('readline-sync');
let arrayNumeros = [];
let contador = 0;

while (contador < 3) {
    let numeroExistente = false;
    let numero = rs.questionInt('\nInforme um numero: ');
    if (contador == 0) {
        arrayNumeros.push(numero);
        contador++;
    } else {
        for (i = 0; i < arrayNumeros.length; i++) {
            if (arrayNumeros[i] == numero) {
                console.log('\nValor já existente\n');
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

arrayNumeros.sort();
console.log(arrayNumeros);



