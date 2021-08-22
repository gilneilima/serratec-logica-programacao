/* O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido. */


const prompt = require("prompt-sync")();

var angulo1 = prompt("Digito o valor primeiro ângulo do vértice: ");
var angulo2 = prompt("Digito o valor segundo ângulo do vértice: ");
var angulo3 = prompt("Digito o valor terceiro ângulo do vértice: ");

var somaAngulos = angulo1 + angulo2 + angulo3;

var triangulo = somaAngulos == 180;

if (triangulo){
    console.log("Os ângulos apresentados formam um triângulo.");
}
else{
    console.log("Os ângulos não formam um triângulo.");
}