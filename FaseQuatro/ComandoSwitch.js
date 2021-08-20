/*O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.*/

//Prompt
const prompt = require("prompt-sync")();

//Entradas
var UF = prompt("Qual a sigla da UF de onde você mora?");
var nomeCompleto = "";

//Processamento
switch(UF) {
  case "AM": nomeCompleto = "Amazonas"; break;
  case "AP": nomeCompleto = "Amapá"; break;
  case "BA": nomeCompleto = "Bahia"; break;
  case "RJ": nomeCompleto = "Rio de Janeiro"; break;
  case "rj": nomeCompleto = "Rio de Janeiro"; break;
  case "SP": nomeCompleto = "São Paulo"; break;
  case "sp": nomeCompleto = "São Paulo"; break;
  case "MG": nomeCompleto = "Minas Gerais"; break;
  case "mg": nomeCompleto = "Minas Gerais"; break;
  case "ES": nomeCompleto = "Espírito Santo"; break;
  case "es": nomeCompleto = "Espírito Santo"; break;
default: nomeCompleto = "Outra estado.";
}

//Saída
var saida = "O Estado é: " + nomeCompleto;
console.log(saida);