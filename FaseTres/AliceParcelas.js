/* Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra. */

const prompt = require("prompt-sync")();

var jogos = 345.00;
var videoGame = 1545.00;
var total =  jogos + videoGame;

console.log("Valor total de jogos R$ "+ jogos.toFixed(2));
console.log("Valor total do Video Game R$ " + videoGame.toFixed(2));
console.log("Total da compra é R$ " + total.toFixed(2));

var treVezes = total / 3;
var cincoVezes = total / 5;
var dezVezesJuros = ((total + (total * 0.015)) / 10);

console.log("Condições de Pagamento:");
console.log("3 vezes sem juros de R$ " + treVezes.toFixed(2));
console.log("5 vezes sem juros de R$ " + cincoVezes.toFixed(2));
console.log("10 vezes de R$ " + dezVezesJuros.toFixed(2) + " com 1,5% de juros sobre o total.");
