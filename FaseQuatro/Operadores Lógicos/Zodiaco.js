/* O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais. */

const prompt = require("prompt-sync")();


var signo = prompt("Qual seu signo? ");
var cavaleiros = "";
var aquario = signo == "aquario";


if (aquario){
    console.log("Você é o mais inteligente");
}
else{

    switch(signo) {
    case "aries": cavaleiros = "Sempre emotivo."; break;
    case "touro": cavaleiros = "Tá sempre atrás de um mito."; break;
    case "gemeos": cavaleiros = "Sempre em dúvida."; break;
    case "cancer": cavaleiros = "Guarda muito râncor."; break;
    case "leao": cavaleiros = "Preguiçoso."; break;
    case "virgem": cavaleiros = "Gosta de diversão."; break;
    case "libra": cavaleiros = "Sempre pensa antes de falar."; break;
    case "escorpiao": cavaleiros = "Foqueiro, pare de falar da vida alheia."; break;
    case "sargitario": cavaleiros = "Com a cabeça nas nuvens."; break;
    case "capricornio": cavaleiros = "Muito esperto."; break;
    case "peixes": cavaleiros = "Nada."; break;
    default: cavaleiros = "Esse signo não existe!";
    }

    var saida = "Sobre seu signo: " + cavaleiros;
    console.log(saida);

}