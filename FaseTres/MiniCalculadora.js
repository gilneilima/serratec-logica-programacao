/* Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles. */

const prompt = require("prompt-sync")();


var num1 = prompt("Digite um número: ");
var num2 = prompt("Digite outro número:");

var soma = parseInt(num1) + parseInt(num2);
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;

console.log("O resultado da soma é " + soma);
console.log("O resultado da subtração é " + subtracao);
console.log("O resultado da multiplicação é " + multiplicacao);
console.log("O resultado da divisão é " + divisao);