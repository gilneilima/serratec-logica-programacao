/* O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado. */

const prompt = require("prompt-sync")();

var num = prompt("Digite um número inteiro positivo: ");
var quadrado = num * num;
console.log("O quadrado de " + num + " foi " + quadrado);

