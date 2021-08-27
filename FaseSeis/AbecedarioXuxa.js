/* O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero. */
var prompt = require("prompt-sync")();

var resposta = 0;
var control = 0;

do {
    for (i = 0; i >= control; i++){
        
        control = i + 1

        if (control == 1){
            console.log("A de amor");
        }
        if (control == 2){
            console.log("B de baixinho");
        }
        if (control == 3){
            console.log("C de coração");
        }
        if (control == 4){
            console.log("E de escola");
        }
        if (control == 5){
            console.log("F de feijão");
        }

        resposta = prompt("Digite 0 para continuar >>> ");
    }
}while (resposta == 0);