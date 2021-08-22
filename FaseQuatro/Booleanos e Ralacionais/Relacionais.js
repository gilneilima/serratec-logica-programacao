/* O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números. */

const prompt = require("prompt-sync")();

//Entrada
var A = prompt("Atribua um número para A. ");
var B = prompt("Atribua um número para B. ");

//Processamento
var igual = A == B;
var diferente = A != B;
var maior = A > B;
var maiorOuIgual = A >= B;
var menor = A < B;
var menorOuIgual = A <= B;

//Saída
console.log("A é igual a B: " + igual);

console.log("A é diferente de B: " + diferente);

console.log("A é maior que B: " + maior);

console.log("A é maior ou igual a B: " + maiorOuIgual);

console.log("A é menor que B: " + menor);

console.log("A é menor ou igual a B: " + menorOuIgual);

