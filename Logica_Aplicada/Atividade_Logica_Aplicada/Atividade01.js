let rs = require ('readline-sync');

let ano = parseInt(rs.question('Digite o ano de nascimento: '))
let idade = 2022 - ano;

if(idade >= 18) {
    console.log('Voto obrigatório!')
} else if(idade > 15 && idade < 18) {
    console.log('Voto opcional!')
} else {
    console.log('Você não pode votar!')
}



