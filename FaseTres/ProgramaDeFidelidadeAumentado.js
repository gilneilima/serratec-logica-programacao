/* O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor. */

const prompt = require("prompt-sync")();

var cupons = prompt("Digite seus cupons ");
var pontos = cupons * 3;
console.log("Seus cupons agora valem: " + pontos + " pontos.");