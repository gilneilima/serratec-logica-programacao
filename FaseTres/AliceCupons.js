/* É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou? */

const prompt = require("prompt-sync")();

var compra = prompt("Qual o valor total da sua compra? ");

var cupons = compra / 190.00;
console.log("Você receberá " + cupons + " cupons promocionais!");