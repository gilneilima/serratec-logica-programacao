/* O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame. */

const prompt = require("prompt-sync")();

var capacidade = prompt("Qual a capacidade em mililitros da garrafa? ");

var alcool = Math.round (capacidade * (70/100));
var gel = Math.round (capacidade - alcool);
var percenteAlcool = Math.round (alcool / 10);
var percenteGel = Math.round (gel / 10);

console.log("O vasilhame possui " + capacidade + " mililitros, \nque precisam ser preenchidos com " + percenteAlcool + "% Álcool e " + percenteGel + "% gel. \nOu seja, " + alcool + "ml de Álcool e " + gel + "ml de gel.");