
const prompt = require("prompt-sync")();


const linhas = [];
linhas[0] = "Lote XV x Caxias";
linhas[1] = "Pq. Fluminense x 25 de Agosto";
linhas[2] = "Primavera x Pq. Suécia";


var numero = prompt("qual é o onibus ");

var onibus = parseInt(numero) - 1;

var linha = linhas[onibus];

console.log("trajeto " + linha);