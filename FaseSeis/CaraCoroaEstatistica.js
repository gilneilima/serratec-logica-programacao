/* O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas. Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda. */


const prompt = require("prompt-sync")();

var contagemCaras = 0;
var contagemCoroas = 0;

//var vezes = parseInt(prompt("Quantas vezes deseja jogar a moeda? >>> "));//Possibilidade de entrada.

for (i = 0; i < 1000; i++){

    var aleatorio = Math.floor(Math.random()*2);//Gerador de aleatoriedade entre 0 (cara) ou 1 (coroa).

    if (aleatorio == 0){
        contagemCaras++//A cada condição IF true a variável incrementa em mais 1.

    }else{
        contagemCoroas++//A cada condição IF false a variável incrementa em mais 1.
    }
}

//console.log(contagemCoroas);
//console.log(contagemCaras);

console.log("Porcentagem de Coroas >>> " + (contagemCoroas * 10) / 100);
console.log("Porcentagem de Caras >>> " + (contagemCaras * 10) / 100);
