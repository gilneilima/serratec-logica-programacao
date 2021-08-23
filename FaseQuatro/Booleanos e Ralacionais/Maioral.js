/* Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela. */

const prompt = require("prompt-sync")();

var jogador1 = prompt("Digite uma número, jogador 1. ");
var jogador2 = prompt("Digite uma número, jogador 2. ");

var jogador1Vence = jogador1 > jogador2;
var jogador2Vence = jogador1 < jogador2;
var empate = jogador1 == jogador2;

console.log("RESULTADOS:");
console.log("Vitória do jogador 1: " + jogador1Vence);
console.log("Vitória do jogador 2: " + jogador2Vence);
console.log("Empate: " + empate);


//Opção
/* if (jogador1 > jogador2){
    console.log("Jogador 1 VENCEU!");
}
else{
    if (jogador1 < jogador2){
        console.log("Jogador 2 VENCEU!");
    }
    else{
        console.log("EMPATE");
    }
} */