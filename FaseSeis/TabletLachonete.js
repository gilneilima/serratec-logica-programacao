/* No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha. */

const prompt = require("prompt-sync")();

console.log("Escolha dois complementos para seu lanche:");
console.log("1 - Bacon. \n2 - Calabresa. \n3 - Alface. \n4 - Milho. \n5 - Purê");

let opcao1 = parseInt(prompt("Qual a primeira opção de completmento? "));
let opcao2 = parseInt(prompt("Qual a segunda opção de completmento? "));

let molho = "";

if (((opcao1 == 3) || (opcao2 == 3))){
    molho = prompt("Deseja molho? s ou n ");

    if ((molho == "s" || "S")){
        console.log("Pedido com: " + opcao1 + " e " + opcao2 + " e molho.");
    }
}else{
    console.log("Pedido com: " + opcao1 + " e " + opcao2);
}

if (((opcao1 == 4) || (opcao2 == 4))){
    molho = prompt("Deseja molho? s ou n ");
    
    if ((molho == "s" || "S")){
        console.log("Pedido com: " + opcao1 + " e " + opcao2 + " e molho.");
    }
}else{
    console.log("Pedido com: " + opcao1 + " e " + opcao2);
}
