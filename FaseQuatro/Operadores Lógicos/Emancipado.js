/* É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual. */

const prompt = require("prompt-sync")();

var sexo = prompt("Qual o seu sexo? ")
var anoNasc = prompt("Qual o seu ano de nascimento? ")

var emancipado = ((sexo == 'masculino') && (anoNasc <= 2003)) || ((sexo == 'feminino') && (anoNasc <= 2000));

console.log("Emancipado: " + emancipado);