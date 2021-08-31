const prompt = require("prompt-sync")();

do {
//Entradas
 var telefone = prompt("Ligando pra você:");

//Processamento
 var naoAcertou = (telefone != "90show");

//Saída
 if (naoAcertou)
 console.log("Que pena...");
 else
 console.log("Parabéns você ganhou");
}
while (naoAcertou);