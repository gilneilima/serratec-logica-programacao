/* O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira. */

const prompt = require("prompt-sync")();

var nome = "string";


do {
    nome = prompt("Qual seu 1o nome");
    if (nome == vogal){
        console.log("Sua entrevista");
    }
    else{
        console.log("Sua entrevista na terça");
    }

} while (nome != "")