/* O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto. */

/* O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor. */

const prompt = require("prompt-sync")();

var cupons = prompt("Digite seus cupons ");
var pontos = cupons * 1;
console.log("De acordo com seus cupons, você tem " + pontos + " pontos no programa de fidelidade!");