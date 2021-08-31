/* No sistema “Portão do estádio” a entrada dos torcedores é controlada de forma organizada e pacífica. O sistema solicita o número do bilhete e direciona o torcedor para a arquibancada. Contudo, se algum mal intencionado furar a fila (indicado por um bilhete com número negativo), a entrada por aquele portão é fechada em definitivo, e todos precisarão ser encaminhados para outro portão. */

const prompt = require("prompt-sync")();
let portao = 1;

do {

    var  bilhete = parseInt(prompt("Qual o número do bilhete? "));

    if (bilhete < 0){
        portao++
        console.log(`Portão fechado permanentemente! Dirija-se ao portão ${portao}`);

    }else{
        console.log("Dirija-se ao seu assento correspondente!");
    }

}while (bilhete)