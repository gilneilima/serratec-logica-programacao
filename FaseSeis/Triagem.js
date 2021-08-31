/* A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela. */

const prompt = require("prompt-sync")();

let paciente = prompt("Qual o nome do paciente? ");
let vacina = prompt("Paciente foi vacinado? s ou n ");

if (vacina == ("s" || "S")){
    vacina = false
    console.log(paciente);
    console.log("Vacinado: Sim\n");
    console.log("[ TRIAGEM ]")
    console.log("Sujeito a infecção? " + vacina);

}else{
    vacina = true;
    console.log(paciente);
    console.log("Vacinado: Não\n");
    console.log("[ TRIAGEM ]")
    console.log("Sujeito a infecção? " + vacina);
}
