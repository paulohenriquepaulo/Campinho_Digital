const entrada = require('readline-sync');

let numeroSorteado = Math.floor(Math.random() * 50);
let numeroInformado = -1;

while (numeroSorteado != numeroInformado) {
    numeroInformado = entrada.questionInt('\nInforme um numero: ');
    if (numeroInformado == numeroSorteado) {
        console.log('\n==============================================================');
        console.log('========= PARABÉNS, VOCÊ ACERTOU! EIS AQUI UM POEMA ==========');
        console.log('==============================================================');
        gerarPema();
        console.log('==============================================================');
        numeroInformado = numeroSorteado;
        break;
    } else {
        console.log();
        if (numeroInformado > numeroSorteado) {
            console.log('\nHmmm, infelizmente você errou. Tente novamente\n' + 
            'O numero informado é maior do que o numero sorteado.\n');
        } else {
            console.log('\nHmmm, infelizmente você errou. Tente novamente\n' + 
            'O numero informado é menor do que o numero sorteado.\n');
        }

    }
}

function gerarPema() {
    let numeroPoema = Math.floor(Math.random() * 5) + 1;
    switch (numeroPoema) {
        case 1:
            return console.log('\nMinha energia é o desafio,\n' +
                'minha motivação é o impossível,\n' +
                'e é por isso que eu preciso\n' +
                'ser, à força e a esmo, inabalável.\n' +
                '\nAugusto Branco\n');
            break;
        case 2:
            return console.log('\nAs pessoas costumam dizer que a motivação não dura sempre.\n' +
                'Bem, nem o efeito do banho, por isso recomenda-se diariamente.\n' +
                '\nZig Ziglar\n');
            break;
        case 3:
            return console.log('\nEu faço da dificuldade a minha motivação.\n' +
                'A volta por cima vem na continuação.\n' +
                '\nCharlie Brown Jr\n');
            break;
        case 4:
            return console.log('\nOtimismo é a chave,\n' +
            'Motivação a porta\n' +
            'e potencial o caminho\n' + 
            'para a grande conquista que se chama sonho.\n' + 
            '\nDiego Éboli\n');
            break;
        default:
            return console.log('\nNossa maior fraqueza está em desistir.\n' +
            'O caminho mais certo de vencer é tentar mais uma vez.\n' + 
            '\nThomas Edison\n');
            break;
    }
}