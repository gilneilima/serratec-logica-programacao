/* Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições. */

const prompt = require("prompt-sync")();

console.log("BANCO DE SANGUE");
console.log('[Digite "sim" ou "nao" nas restrições a seguir]');

var idade = prompt("Idade abaixo de 16 ou acima de 69 anos: ");
var peso = prompt("Pesa menos que 50kg? ");
var hepatite = prompt("Portador de Hepatite? ");
var malaria = prompt("Já teve Malária? ");
var doacao = prompt("Fez doação recente? ");

var resultado = (idade == "nao") && (peso == "nao") && (hepatite == "nao") && (malaria == "nao") && (doacao == "nao");

console.log("[Resultado da triagem]");
console.log("Pode doar sangue? "+ resultado);