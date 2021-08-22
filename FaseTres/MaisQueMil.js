/* O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero. */

const prompt = require("prompt-sync")();

//Os 4 primeiros multiplos de 4, acima de mil são: 1004, 1008, 1012 e 1016.

var soma = 1004 + 1008 + 1012 + 1016;
console.log("A soma dos quatro primeiros múltiplos de quatro, acima de mil é: " + soma);

//Os 4 primeiros números primos a partir do zero são 2, 3, 5 e 7.
var primos = 2 + 3 + 5 + 7;
console.log("A soma dos quatro primeiros números primos, a partir de zero é: " + primos);

//Subtração da primeira expressão pela segunda expressão.
var result = soma - primos;
console.log("O resultado da subtração é: " + result);