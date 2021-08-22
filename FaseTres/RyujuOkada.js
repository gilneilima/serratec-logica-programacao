/* O programa "Ryuju Okada" escreve na tela o resultado das expressões abaixo:
a) 2 + 3 - 5 * 8 - 4 + 354 - 521 + 7 * 66
b) 2 + 7 * (14 - 21) + 28 * 3 * 42 + 740 - (156 + 4 + 40) * 9
 */

const prompt = require("prompt-sync")();

//Primeira expressão.
var expressao1 = 2 + 3 - 5 * 8 - 4 + 354 - 521 + 7 * 66;
console.log("O resultado da primeira expressão é: " + expressao1);

//Segunda expressão.
var expressao2 = 2 + 7 * (14 - 21) + 28 * 3 * 42 + 740 - (156 + 4 + 40) * 9;
console.log("O resultado da segunda expressão é: " + expressao2);