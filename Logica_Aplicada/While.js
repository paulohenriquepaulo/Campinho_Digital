const entrada = require('readline-sync');

let numeroFatorial = entrada.question('Insira o numero para calcular o fatorial: ');

let resultado = 1;

while(numeroFatorial > 1 ) {
    resultado = numeroFatorial * resultado;
    numeroFatorial = numeroFatorial - 1;
    if (numeroFatorial > 1) {
        
    }
}

console.log(resultado);