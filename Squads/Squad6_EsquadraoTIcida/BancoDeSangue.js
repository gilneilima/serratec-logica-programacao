/* O Banco de sangue do Hospital H.S.C.,
está precisando repor o seu estoque de sangue, que está abaixo do limite minimo.
É feito uma campanha publicitária local, 
onde foi ofertado um brinde para os doadores que concluirem as suas doações
no período da campanha.
O Hospital necessita repor com urgência os tipos de sangue: A,B e O.
Para doar são necessários alguns requisitos e está em boa condições de saúde.
Os doadores que comparecerem para a campanha de doação,
após a realização da consulta de analise médica,
estarão aptos para doar: sim ou não. */

const prompt = require("prompt-sync")();

console.log("[ 🩸💉 BANCO DE SANGUE 💉🩸 - 🏥 ⚕️ Hospital H.S.C ⚕️ 🏥 ]");

var tipo = prompt("Qual seu tipo sanguíneo? ");
var tipoMaiusculo = tipo.toUpperCase();

//necessidade = true
var necessidade = (tipoMaiusculo == "A") || (tipoMaiusculo == "B") || (tipoMaiusculo == "O");

if (necessidade){
    console.log("Responda SIM ou NAO para as perguntas a seguir");
    var idade = prompt("Idade abaixo de 16 ou acima de 69 anos: ");
    var idadeMai = idade.toUpperCase();
    var peso = prompt("Pesa menos que 50kg? ");
    var pesoMai = peso.toUpperCase();
    var hepatite = prompt("Portador de Hepatite? ");
    var hepatiteMai = hepatite.toUpperCase();
    var malaria = prompt("Já teve Malária? ");
    var malariaMai = malaria.toUpperCase();
    var doacao =  prompt("Fez doação recente? ");
    var doacaoMai = doacao.toUpperCase();

    //opcoes = true.
    var opcoes = ((idadeMai == "NAO") && (pesoMai == "NAO") && (hepatiteMai == "NAO") && (malariaMai == "NAO") && (doacaoMai == "NAO"));

    console.log("[Resultado da Triagem]");

        if (opcoes){
            var doador = "( SIM ) ✔️";
            console.log("Pode doar sangue? "+ doador);
        }
        else{
            doador = "( NÃO ) ❌";
            console.log("Pode doar sangue? "+ doador);
            console.log("🔴 NÃO PODE SER DOADOR DE SANGUE! 🔴");
        }
}
else{
    console.log("😃👍 Obrigado por sua disposição. Mas não estamos precisando desse tipo sanguíneo no momento.");
}
