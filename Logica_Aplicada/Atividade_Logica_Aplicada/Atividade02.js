let rs = require ('readline-sync');

let numero = parseInt(rs.question('Digite um número: '))

if (numero % 2 === 0) {
    console.log('PAR.')
} else {
    console.log('IMPAR.')
}