/* O programa “Tempo de vida” irá imprimir a soma das idades de todos os colegas do seu squad. Pergunte a cada um a idade e não esqueça a sua! Depois faça a atribuição da expressão que você montou em uma variável inteira. */

const prompt = require("prompt-sync")();

//Somar as idades dos colegas de squad.

//Entrada
var idadeGilnei = 37;
var idadeLeandro = 28;
var idadeCarol = 25;
var idadeCarlos = 56;
var idadeMarcella = 31;
var idadeDiego = 33;

//Processamento
var somaIdades = idadeCarlos + idadeCarol + idadeDiego + idadeGilnei + idadeLeandro + idadeMarcella;

//Saída
console.log("A soma das idades é: " + somaIdades);