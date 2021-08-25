/* Estou criando um novo mapa astral para minhas previsões astrológicas. 
Para isso, os signos serão remodelados conforme a seguir: Quem nasceu no 1º trimestre do ano será do signum mar, quem nasceu no 2º trimestre será terra, no 3º trimestre será Sol e por fim, no 4º trimestre, será lua. 
Preciso que colete a data de nascimento mas eu não preciso do ano, somente do dia e o mês. 
Após o usuário informar sua data o sistema deve dizer qual signum. 
Por fim, faça uma pesquisa de satisfação para saber se ele gostou ou não gostou. */

const prompt = require("prompt-sync")();

console.log("⭐⭐⭐[ MAPA ASTRAL ]⭐⭐⭐");
var mesNasc = prompt("Qual sua data de nascimento? dd/mm/aa ---> ");

var recorte = mesNasc.substring(3,5);

var primeiroTri = (recorte == "01") || (recorte == "02") || (recorte == "03");
var segundoTri = (recorte == "04") || (recorte == "05") || (recorte == "06");
var terceiroTri = (recorte == "07") || (recorte == "08") || (recorte == "09");
var quartoTri = (recorte == "10") || (recorte == "11") || (recorte == "12");

if (primeiroTri){
    console.log("Seu signo é Mar 🌊");
}
else{
    if (segundoTri){
        console.log("Seu signo é Terra 🌎");
    }
    else{
        if (terceiroTri){
            console.log("Seu signo é Sol 🌞");
        }
        else{
            if (quartoTri){
                console.log("Seu signo é Lua 🌜");
            }
        }
    }
}

//pesquisa de satisfação
var satisfacao = prompt("Você gostou de fazer seu Mapa Astral? sim ou nao ---> ");
if (satisfacao == "sim"){
    console.log("⭐⭐⭐ Obrigado! Indique o Mapa Astral para seus amigos. ⭐⭐⭐");
}
else{
    if (satisfacao == "nao"){
        console.log("Sinto muito que não tenha gostado. Hoje não deve ser um bom dia para seu signo.");
    }
}