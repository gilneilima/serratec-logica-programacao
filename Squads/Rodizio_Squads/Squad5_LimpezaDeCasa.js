/*Proposição de Requisito: Squad 5.*/

/*Resolvido por Leandro Fita. Squad 2*/

/*Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele
tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema
que indique se o comodo esta limpo ou não, exibindo uma mensagem no console, para
cada cômodo que for da sua escolha */
const prompt = require("prompt-sync")();

var casa = [
  "Sala de Estar",
  "Banheiro do 1º Andar",
  "Banheiro do 2º Andar",
  "Corredor 1º Andar",
  "Corredor 2º Andar",
  "Cozinha",
  "Suíte",
  "Quarto Júnior",
  "Quarto Júlia",
  "Varanda",
  "Lavanderia",
];

var resposta = 0;
do {
    console.log(
        "STATUS DE LIMPEZA - SUA SOLUÇÃO EM HIGIENE DOMÉSTICA - \nInsira o número do cômodo que deseja verificar:"
    );

    console.log("1- Sala de Estar");
    console.log("2- Banheiro do 1º Andar");
    console.log("3- Banheiro do 2º Andar");
    console.log("4- Corredor 1º Andar");
    console.log("5- Corredor 2º Andar");
    console.log("6- Cozinha");
    console.log("7- Suíte");
    console.log("8- Quarto Júnior");
    console.log("9- Quarto Júlia");
    console.log("10- Varanda");
    console.log("11- Lavanderia");

    resposta = prompt('-->');
    var comodo = parseInt(resposta) - 1;
    var output = casa[comodo];

    console.log("O cômodo selecionado foi " + output + ".");
    var limpo = ["Limpo", "Sujo"];
    var random = Math.floor(Math.random() * limpo.length);
    var aleatorio = limpo[random];
    if (aleatorio == "Limpo") {
        console.log(
        'Cômodo limpo, ótimo! Está tudo em ordem por aqui! Gostaria de verificar outro cômodo? Digite "S" para sim e "N" para não');
        var verificarNovamente = prompt();
    if (verificarNovamente == "S" || verificarNovamente == "s"); 
    { 
        continue;   
    }        
  } else {
    console.log(
      'Vixê! Este cômodo está sujo, mas não se preocupe! Gostaria de agendar a limpeza? Digite "S" para sim e "N" para não'
    );
    var agendar = prompt();
  }
  if ((agendar != "S" && agendar != "s")) {
    console.log(
      'Tudo bem, não agendaremos a limpeza! Gostaria de verificar outro cômodo? Digite "S" para sim e "N" para não'
    );
    verificarNovamente = prompt();
  } else {
    console.log(
      "Perfeito! Para quando gostoria de agendar a limpeza? Escolha o dia da próxima semana!"
    );
    Limpeza();
    console.log(
      'Gostaria de verificar outro cômodo? Digite "S" para sim e "N" para não'
    );
    verificarNovamente = prompt();
  }
} while (verificarNovamente == "S" || verificarNovamente == "s");
fim();



function Limpeza() {
  var dias = [
    "Segunda-Feira",
    "Terça-feira",
    "Quarta-feria",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  console.log(
    "Digite o número correspondente: \n1- Segunda-Feira\n 2- Terça-feira\n 3- Quarta-feria\n 4- Quinta-feira\n 5- Sexta-feira\n 6- Sábado"
  );
  var agendLimp = prompt();
  var agendaNumero = parseInt(agendLimp) -1;
  var output2 = dias[agendaNumero];
  if (agendaNumero == 0 || agendaNumero <= 6) {
    console.log(
      "Maravilhoso! Sua limpeza foi agendada com sucesso para " + output2 + "!"
    );
    console.log(
      'Deseja a sua limpeza para a parte da mnahã ou da tarde? Digite "1" para manhã e "2" para tarde. '
    );
    var hora = prompt();
    var horaConvert = hora;

    do {
      switch (horaConvert) {
        case "1":
          console.log(
            "Sua limpeza foi agendada para " + output2 + " de manhã!"
          );break;
        case "2":
          console.log(
            "Sua limpeza foi agendada para " + output2 + " de tarde!"
          );
          break;

        default:
          console.log("Sua resposta foi inválida.");
          break;
      }
    } while ((hora = ! 1) || (hora = ! 1));
  }
}

function fim() {
    console.log('\n########## Muito obrigado por usar os serviços da STATUS DE LIMPEZA ##########');
    console.log('\n===================================================================================');
    console.log('\n"------------Limpamos sua casa no amanhã para que você possa ficar tranquilo hoje!"---------------\n');

}