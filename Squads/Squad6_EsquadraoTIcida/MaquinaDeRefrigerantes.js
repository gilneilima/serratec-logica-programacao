/* Enunciado: Máquina de Refrigerantes
O cliente precisa de um console para uma máquina de refrigerante para quatro sabores diferentes de refrigerante. Então essa máquina deve exibir uma tela para o usuário escolher o saber do refrigerante.  Em seguida, exibir uma mensagem com o preço do valor do refrigerante. Após, exibir uma tela com opção de pagamento apresentando quatro opções de cédulas (R$ 2, R$5, R$ 10, R$50). Após o cliente escolher a opção de pagamento, exibir uma mensagem com o troco, caso o valor do refrigerante for menor do que o valor da cédula escolhida; se o valor da cédula for inferior ao valor do refrigerante, exibir uma mensagem de valor inválido e retornar o usuário para a tela de escolha das cédulas até que um opção de pagamento válida seja escolhida.
Estou pensando em acrescentar uma opção de saída na parte do pagamento que encerraria o programa. */

const prompt = require('prompt-sync')();

var opcao = 0;
var troco = 0;

//Apresentação da Máquina de Refrigerantes e opções de sabores
console.log("Olá! Essa é nossa 🥫 MÁQUINA DE REFRIGERANTES 🥫");
console.log("Esses são nossos sabores de refrigerante: \nOpção 1 > 🥫 Guarana \nOpção 2 > 🛢️ Coca-cola \nOpção 3 > 🥫 Sprite");

//Entrada da escolha do cliente
opcao = prompt("Digite o número da sua opção: 👁️ ");

//Enquanto entrada for errada (menor que número de opções), voltar na pergunta e dizer que opção é inexistente.
while (opcao > 3){
      console.log("________________ \n❌ OPÇÃO INCORRETA! \nDigite a opção correta.\n________________");
      console.log("Esses são nossos sabores de refrigerante: \n Opção 1 > Coca-cola \n Opção 2 > Guarana \n Opção 3 > Sprite");
      opcao = prompt("Digite o número da sua opção: 👁️ ");
}

//Entrada da opção do cliente e apresentação do valor do refrigerante
var preco = 0.00;
var sabor = "";
var pagInteiro = 0.00;

    if (opcao == 1){
    sabor = "🥫 Guarana";
    preco = 5.00;
    console.log("O refrigerante escolhido é", sabor,"e custa R$", preco);
    }

    if (opcao == 2){
    sabor = "🛢️ Coca-cola";
    preco = 4.50;
    console.log("O refrigerante escolhido é", sabor,"e custa R$", preco);
    }

    if (opcao == 3){
    sabor = "🥫 Sprite";
    preco = 4.00;
    console.log("O refrigerante escolhido é", sabor,"e custa R$", preco);
    }

//Formas de pagamento.
console.log("Como prefere pagar? 💲 \n R$2 - R$5 - R$10 - R$20");
var pagamento = prompt("Pague com R$ ");//nota errada, valor false. nota certa, valor true.
var pagInteiro = parseInt(pagamento);
var control1 = (pagInteiro == 2.0) || (pagInteiro == 5.0) || (pagInteiro == 10.0) || (pagInteiro == 20.0);

if (control1){//Pra executar o laço valor tem que ser true.
    troco = (pagInteiro - preco);
    var confereTroco = (Math.sign(troco) == -1);

    while(confereTroco){
        console.log("________________________ \n🔻 PAGAMENTO INSUFICIENTE 🔻 \nInsira mais dinheiro.\n________________________");
        console.log("Você já pagou R$", pagamento, "Falta pagar R$", Math.abs(troco));
        console.log("Como prefere pagar? 💲 \n R$2 - R$5 - R$10 - R$20");
        pagamento = prompt("Pague com R$ ");
        pagInteiro = parseInt(pagamento);
        control1 = (pagInteiro == 2.0) || (pagInteiro == 5.0) || (pagInteiro == 10.0) || (pagInteiro == 20.0);
        if(control1){
        troco = (pagInteiro - Math.abs(troco));
        confereTroco = (Math.sign(troco) == -1);
        }
      }
}
else{
console.log("________________________ \n❌ NOTA INVÁLIDA! \nEscolha cédula válida.\nR$2 - R$5 - R$10 - R$20 \n________________________");
pagamento = prompt("Pague com R$ ");
pagInteiro = parseInt(pagamento);
control1 = (pagInteiro == 2) || (pagInteiro == 5) || (pagInteiro == 10) || (pagInteiro == 20) || (pagInteiro == 50);
}

//Se pagamento suficiente, dar troco e refrigerante.
console.log("Seu troco é R$", troco,"e seu refrigerante é", sabor,".");