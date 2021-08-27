/* O jogo “pirâmiDe” solicita a altura da pirâmide, e imprime uma divertida pirâmide de letras D no console. */

const prompt = require("prompt-sync")();

let altura = Number(prompt("Altura da pirâmide\t"));
let d = prompt("Qual a letra vc quer?\t");

for (let i = 0; i < altura; i++) {

    for (let j = 0; j < i; j++) {
        d += " D ";
    }
console.log(d);
}