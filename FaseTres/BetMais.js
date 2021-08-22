/* O sistema “Betmais” organiza as apostas de seus amigos. Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: Os pares são somados, os ímpares subtraídos. O programa irá imprimir o resultado, para você repassar aos amigos. */

const prompt = require("prompt-sync")();

var aposta  = (2 + 4 + 8 + 2 + 6 + 8 ) - (5 - 3 - 7 - 3 - 1 - 9);
console.log("O resultado Betmais é " + aposta);