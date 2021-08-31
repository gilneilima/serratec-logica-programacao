/* Cineshow tem 7 poltronas disponpiveis para a sessão das 18h: 43 e 50.
A bilheteria quer vender esses ingressos, sendo que a cadeira 46 é preferencial e não pode ser vendida.*/

const prompt = require("prompt-sync")();
//Entrada

//Processamento
for (var i = 43; i < 50; i++){
    console.log("Poltrona " + i);
    var poltrona = prompt("Poltrona comum ou preferencial? ");

    if ((poltrona == "P") && (i != 46)){
    console.log("Essa poltrona não é preferencial");
    continue;
}
console.log ("Ingresso " + i + " vendido.");

}

//incrementar com condição

