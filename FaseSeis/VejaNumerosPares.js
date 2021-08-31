/*No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10, separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência (entre 12 e 20 etc). */

const prompt = require("prompt-sync")();

var continuar = 1;

var priPar = 4;
var segPar = 6;
var terPar = 8;

console.log(priPar + ", " + segPar + ", " + terPar + ".");

while (continuar == 1){

    priPar += 10;
    segPar += 10;
    terPar += 10;
   
    continuar = parseInt(prompt("Deseja continuar? Digite 1 >>> "));

    console.log(priPar + ", " + segPar + ", " + terPar + ".");

}