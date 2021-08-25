/* Vamos criar um pequeno jogo de esconde esconde. Para dois participantes o participante 1 terá 5 lugares para se esconder: 1 - embaixo da cama; 2 - armário; 3 - porão; 4 - atrás da porta; 5 - banheiro. O participante 1 deverá escolher um dos lugares pra se esconder. Em seguida são apresentadas as opções para o participante 2, ele terá duas chances para encontrar onde o participante 1 se escondeu. Caso ele acerte o participante 1 perde. Caso erre ele perde. */

const prompt = require("prompt-sync")();

//1 - Embaixo da Cama. 2 - Dentro do Armário. 3 - No Porão. 4 - Atrás da Porta. 5 - No Banheiro.

console.log("[🐲 - JOGO DE ESCONDE ESCONDE DO PROGRADRAGÃO - 🐲]");
var jogar = prompt("Você quer jogar? sim ou nao. ");

var progradragao = Math.floor(Math.random() * (5 - 1 + 1)) + 1;//Gerar números aleatórios de 1 a 5.


if (jogar == "sim"){
    console.log("\nProgradragão irá se esconder! 🐉");
    console.log("O Progradragão se escondeu num desses lugares: \n");
    console.log("1 - Embaixo da Cama. \n2 - Dentro do Armário. \n3 - No Porão. \n4 - Atrás da Porta. \n5 - No Banheiro. \n");
    console.log("Você tem apenas duas chances para encontrá-lo!");
    
        //Entrada da opção do jogador
        var opcao = prompt("Digite o número corresponde ao local onde o Progradragão se escondeu. ---> ");

        if (progradragao == opcao){
            console.log("Você achou o Progradragao! 🐉");
            console.log("FIM DE JOGO");
        }
        else{
            console.log("Você tem mais uma chance");
            opcao = prompt("Digite o número corresponde ao local onde o Progradragão se escondeu. ---> ");
            if (progradragao == opcao){
                console.log("Você achou o Progradragao! 🐉");
                console.log("FIM DE JOGO");
            }
            else{
                console.log("FIM DE JOGO \nSuas tentativas acabaram!");
                console.log("🐉 Progradragão estava escondido em: " + progradragao);
            }
        }
}
else{
    console.log("Volte outro dia para jogar!");
}