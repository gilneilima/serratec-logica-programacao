/*Descrição:
Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito, bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso, avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto válido.
Dica: Use paçoca como "pacoca" e café como "cafe".
*/

const prompt = require("prompt-sync")();

console.log("Olá! Seja muito bem-vindo(a)(x)!")
console.log("Nossa barraquinha tem \n1.Bala \n2.Pirulito \n3. Bombom \n4. Paçoca \n5. Jujuba e \n6. Café")
var compra = prompt("Qual item você quer comprar? Digite o nº da opção desejada.")

var obrigada = true
var desculpa = true

if (obrigada = compra == 1 || compra == 2 || compra == 3 || compra ==  5)
    console.log("Muito obrigado pela sua compra! Tenha uma excelente semana.")
else
    if(desculpa = compra == compra == 4 || compra == 6)
        console.log("Desculpa, eu devorei o estoque! Eu amo paçoca e café mas prometo guardar um pouco para você na próxima vez.")
    else
    console.log("Infelizmente não tenho essa opção. Por favor, tente novamente.")


/*
RESOLUÇÃO POR SWITCH

const prompt = require('prompt-sync')();

console.log("Bem vindo a barraca do Zepa!");
console.log (" Aqui vendemos: \na.café, \nb.bala, \nc.pirulito, \nd.bombom \ne.pacoca \nf.pacoca");

var codigo = prompt("Qual produto você quer? Digite o código do produto: ");
switch (codigo){
   case "a":
      console.log( "Perdão! Devorei a paçoca e café do estoque. Estou tentando me livrar deste vício. ")
   break;
   case "b": 
      console.log ("Muito obrigado! Volte sempre.");
   break;
   case "c":
      console.log ("Muito obrigado! Volte sempre.");
   break;
   case "d":
      console.log ("Muito obrigado! Volte sempre.");
   break;
   case "e":
      console.log( "Perdão! Devorei a paçoca e café do estoque. Estou tentando me livrar deste vício. ")
   break;
   case "f":
      console.log( "Perdão! Devorei a paçoca e café do estoque. Estou tentando me livrar deste vício. ")
   break;
   default: 
   console.log("Não trabalhamos com este produto. Por favor, escolha um produto válido.");
}
*/