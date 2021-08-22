/* A “continha oposta” lê um número e mostra seu valor negativo. */

const prompt = require("prompt-sync")();

valorPositivo = prompt("Digite um valor inteiro positivo: ");
valorNegativo = - valorPositivo; //Unário.
console.log("Valor inteiro negativo correspondente é: " + valorNegativo);