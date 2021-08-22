/* No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas.  */

const prompt = require("prompt-sync")();

console.log("ELEIÇOES 2022");

var idade = prompt("Qual sua idade? ");

voto = idade >= 16;

console.log("Já pode votar? " + voto);


//Opção
/* if (voto){
    console.log("Deixe separado seu título de eleitor e documento com foto.");
}
else{
    console.log("Você ainda não tem idade para exercer o voto.");
} */