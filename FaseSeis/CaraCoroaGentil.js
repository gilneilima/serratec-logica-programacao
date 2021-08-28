/* O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console. */

const prompt = require("prompt-sync")();


var contador = 0;
var numero = 0;
var pergunta = 0;//parseInt(prompt("Qual sua escolha? (0) Cara (1) Coroa >>> "));

do {

    numero = Math.floor(Math.random() * 2);
    contador++;

} while (pergunta != numero)

console.log(`Você ganhou, na ${contador} vez!`);