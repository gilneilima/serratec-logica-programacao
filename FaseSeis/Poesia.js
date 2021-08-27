/* No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos. */

var prompt = require("prompt-sync")();

var resposta = "s";

do {
console.log('Quando eu for, um dia desses,\nPoeira ou folha levada \nNo vento da madrugada,\nSerei um pouco do nada \nInvisível, delicioso \nQue faz com que o teu ar \nPareça mais um olhar, \nSuave mistério amoroso, \nCidade de meu andar \n(Deste já tão longo andar!) \nE talvez de meu repouso... \nAutor: Mario Quintana\n');

resposta = prompt("Deseja ler novamente? s ou n >>> ");

}while (resposta == "s");