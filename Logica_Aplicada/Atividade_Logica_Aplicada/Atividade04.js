const rs =  require('readline-sync');

const quantidadeMaca = (rs.question('Informe a quantidade de maças: '));

if (quantidadeMaca < 12 ) {
    console.log('O valor total é: ' + parseFloat(quantidadeMaca * 0.30));
} else {
    console.log('O valor total é: ' + parseFloat(quantidadeMaca * 0.25));
}