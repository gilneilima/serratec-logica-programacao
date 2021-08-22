/* O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit. */

const prompt = require("prompt-sync")();

var celsius = prompt("Qual a temperatura em graus Celsius? ");
//Fórmula de conversão
fahrenheit = (celsius * 9/5) + 32;

console.log('Temperatura em graus Fahrenheit é ' + fahrenheit);