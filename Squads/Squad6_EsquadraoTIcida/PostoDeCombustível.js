/* Um posto de combustível quer saber qual de seus combustíveis tem a preferência de seus clientes. Para isso ele precisa de uma pesquisa de satisfação. Primeiramente, o cliente deve informar o tipo de combustível através dos seguintes códigos: 1.Gasolina, 2. alcool, 3.GNV e 4. diesel e 5- para optar por não responder a pesquisa. Se o cliente informar um código inválido, devemos pedir um novo código até que o mesmo seja válido. O programa encerrará caso ele informe o código 5. Após o encerramento, deve aparecer a mensagem "Obrigado" e também o combustível escolhido pelo cliente. */
//Marcella
const prompt = require("prompt-sync")();

console.log("\n[ ⛽ POSTO DO ZÉPA ⛽ ]");
var qtdParticipantes = prompt("Há quantos clientes para pesquisa? >>> ");
var qtd = parseInt(qtdParticipantes);

var combustiveis = [];
combustiveis[0] = "Não Opinou";
combustiveis[1] = "Etanol";
combustiveis[2] = "GNV";
combustiveis[3] = "Diesel";
combustiveis[4] = "Gasolina";

var armazenaConta = [];
armazenaConta[0] = 0;
armazenaConta[1] = 0;
armazenaConta[2] = 0;
armazenaConta[3] = 0;
armazenaConta[4] = 0;

var opcao = 0;

console.log("\n[ PESQUISA DE SATISFAÇÃO DO POSTO DO ZÉPA ]");

for (i = 0; i < qtd; i++){
    var pesquisa = prompt("Cliente nº ( " + (i + 1) + " ) deseja participar de nossa pesquisa de satisfação? Sim ou Nao >>> ");
    var pesquisaMaiuscula = pesquisa.toUpperCase();

    if (pesquisaMaiuscula == "SIM"){//Se true, executa o que está no bloco deste IF.
        console.log("\nCliente nº ( " + (i + 1) + " ) Qual de nossos combustíveis você prefere? \n0 - Prefere não opinar. \n1 - Etanol. \n2 - GNV. \n3 - Diesel \n4 - Gasolina.\n");    
        opcao = prompt("Digite o número da sua opção. >>> ");
        console.log("🤝 OBRIGADO POR RESPONDER. Volte sempre! 🤝");

        armazenaConta[opcao] = armazenaConta[opcao] + 1;//somo 1 ao conteúdo do indice do array armazenaConta[].


    console.log("Você prefere: " + combustiveis[opcao]);//Apresenta a opção de combustível escolhida.
    }
    else{
        console.log("\n🤝 Obrigado cliente nº ( " + (i + 1) + " ) pela preferência! Até a próxima vez. 🤝\n");//Se o IF receber false, executa o que está no bloco deste ELSE.
    }
}
console.log("\nO resultado da pesquisa é:\n--------------------------");
for (i = 0; i < combustiveis.length; i++){//Laço de repetição para apresentar os votos registrados aos combustiveis listados no array combustíveis.
console.log(combustiveis[i] + " recebeu " + armazenaConta[i]);
}
