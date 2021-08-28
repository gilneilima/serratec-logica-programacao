/* Para exibir a tabela de “temperaturas”, o programa irá exibir os graus Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit. */

const prompt = require("prompt-sync")();

var temperatura = parseInt(prompt("Qual a temperatura quer transformar de Celsius para Fahrenheit? "));
var celsius = 0;
var fahrenheit = 0;

do {
    celsius++
    fahrenheit = (celsius * 9/5) + 32;

    console.log(celsius + "° C" + " <--> " + fahrenheit + "° F");

}while (celsius < temperatura)

