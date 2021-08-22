/* Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º. */

const prompt = require("prompt-sync")();

const mascara = 1; // Digito 1 representa SIM para uso da máscara
const temperatura = 37.5;


console.log("IGREJA MUNDIAL DOS PROGRAMADORES");

var pergunta = prompt("Próxima pessoa a entrar está usando máscara? Digite 1 para SIM ou 2 para NÃO. --->");

var permitir = pergunta == mascara;
var permitir2 = 0.00;

if (permitir){
    var medicao = prompt("Qual a temperatura aferida? ");
    if (permitir2 = medicao <= temperatura){
        console.log("Pode entrar.");
    }
    else{
        console.log("PROCURE ATENDIMENTO MÉDICO");
    }
    
}
else{
    console.log("Volte e ponha sua máscara!");
}