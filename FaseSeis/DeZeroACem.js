/* O programa “de zero a cem” mostra na tela todos os números desse intervalo, mesmo trabalhando com limites de início e fim da repetição definida de 1 a 10. */

const prompt = require("prompt-sync")();

var control = 0;
var contar = 0;


for (i = 0; i <= 10; i++){

    do{
        contar++
        console.log(contar);
        
    }while (contar < control)

    control += 10;

}