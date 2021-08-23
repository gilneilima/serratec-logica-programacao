/* O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir. */

const prompt = require("prompt-sync")();

const limiteClientes = 10;

var quantidade = prompt("Quantas pessoas temos na loja? ");

var permitir = parseInt(quantidade) < limiteClientes;

console.log("Cliente pode entrar na loja? " + permitir);





//Opção com IF
/* console.log("Há cliente da fila para entrar!" );

var quantidade = prompt("Quantas pessoas temos na loja agora? ");

var permitir = quantidade < limiteClientes;

if (permitir){
    console.log("Pode permitir a entrada do próximo cliente da fila.");
 }

 else{
    console.log("Aguarde, loja lotada!")
} */

 