/* No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao carta, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor. */

const prompt = require("prompt-sync")();

var conta = 0;
var carta = 0;
var darCarta = " ";

do {
    carta = prompt("Digite: ");
    conta = carta + conta;
    darCarta = prompt("Dar outra carta? s ou n ");
} while (darCarta == "s" && conta < 21)

console.log("Ganhou! " + conta);