/* Jennyffer está preparando as malas para passar o feriado prolongado na casa da sua avó, no interior, sem aglomeração. Colocou na mala 4 calças e 8 camisetas. Quantas combinações, ou, de quantas formas diferentes ela poderá usar essas roupas? */

const prompt = require("prompt-sync")();

var calca = 4;
console.log("Calças: " + calca);
var camiseta = 8;
console.log("Camiseta: " + camiseta);
var mala = calca * camiseta;

console.log("Poderá ser vestir de " + mala + " formas diferentes.");