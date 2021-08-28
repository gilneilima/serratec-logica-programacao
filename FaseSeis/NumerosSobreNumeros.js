/* Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência. */

const prompt = require("prompt-sync")();

var numInt = parseInt(prompt("Digite um número inteiro >>> "));
numInt++;
var soma = 0;

do {
    numInt--
    console.log(" " + numInt);
    soma = (soma + numInt);

}while(numInt != 1)
//console.clear();
console.log("Soma = " + soma);