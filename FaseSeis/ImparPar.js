/* Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares). */

const prompt = require("prompt-sync")();

//VVVVVVVVVV Perguntas
var pergunta = parseInt(prompt("Até qual número você deseja contar? "));
var pergunta2 = prompt("Quais deseja ver? (P) - Par ou (I) - Ímpar ").toLocaleUpperCase();


//VVVVVVVVVV Segundo bloco de instruções para Ímpar.

if (pergunta2 == "I"){//Caso If receba true para a comparação do conteúdo de (pergunta2) igual a letra I.
        do{

            if ((pergunta % 2) == 0){//compara o resto igual a 0 da divisão por 2 do número escolhido. true para continuar.
                pergunta = pergunta -1;//atribui a variável (pergunta) o seu próprio valor subtraindo 1.
                console.log(pergunta);
                pergunta = pergunta -2;//atribui a variável (pergunta) o seu próprio valor subtraindo -2.
            }else{
                console.log(pergunta);
                pergunta = pergunta - 2;//Caso IF receba falso, atribui a variável (pergunta) o seu próprio valor subtraindo -2.
            }

        }while (pergunta > 0)//Enquanto o número escolhido for maior que zero o DO será executado.



//VVVVVVVVVV Segundo bloco de instruções para Par.

}else{//Caso IF receba falso, ou seja a letra P, executa essas intruções.
        do{

            if ((pergunta % 2) == 0){//compara o resto igual a 0 da divisão por 2 do número escolhido. true para continuar.
                console.log(pergunta);
                pergunta = pergunta - 2;//atribui a variável (pergunta) o seu próprio valor subtraindo -2.

            }else{
                pergunta = pergunta - 1;//atribui a variável (pergunta) o seu próprio valor subtraindo 1.
                console.log(pergunta);
                pergunta = pergunta - 2;//atribui a variável (pergunta) o seu próprio valor subtraindo -2.
            }

        }while( pergunta > 0);//Enquanto o número escolhido for maior que zero o DO será executado.

    }