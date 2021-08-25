/* Descrição: A prefeitura da cidade quer fazer uma pesquisa e saber quantos de seus habitantes já foram vacinados contra o corona vírus. Essa pesquisa irá responder quantas pessoas tomaram a primeira dose, quantas tomaram a segunda dose e quantas não tomaram nenhuma dose ainda, além disso também dirá quantas tomaram a dose de cada laboratório. Ao final o programa deve gerar saídas mostrando a quantidade de pessoas entrevistadas no dia, quantas tomaram uma dose, duas doses ou nenhuma dose e, do total, quantas doses de cada laboratório foram aplicadas. Se a pessoa tomou uma dose o programa deve avisar "Não esqueça a próxima dose", Se tomou as duas "Parabéns, você está imunizado! Continue se cuidando!" e se não tomou nenhuma "Você deve tomar a vacina, proteja você e as pessoas que ama." o programa só deve parar quando não houver mais nenhuma pessoa para ser entrevistada. O número de doses e laboratórios pode variar de acordo com o programador. */



var prompt = require("prompt-sync")();

var qtdDose = 0;
var qtdDoseInt = 0;
var qtdEntrevistas = 0;
var laboratorio = 0;

var doseZero = 0;
var doseUm = 0;
var doseDois = 0;

var coronavac = 0;
var astrazeneca = 0;
var pifzer = 0;
var johnsons = 0;


var entrevistado = prompt ("Vamos começar a entrevista? (Digite 'S' para sim ou 'N' para não. )");

while(entrevistado == 'S' || entrevistado == 's'){
    qtdDose = prompt("\nQuantas doses de vacina você já tomou? - Digite 0 para NENHUMA DOSE - 1 para UMA DOSE - 2 para DUAS DOSES ");
    qtdDoseInt= parseInt(qtdDose);

    if(qtdDoseInt == 0){
        console.log("\nVocê deve tomar a vacina, proteja você e as pessoas que ama.");
        doseZero++;
    }
    else{
        laboratorio = prompt("\nQual das vacinas você tomou? - Digite 1 para Coronavac - 2 para Astrazeneca - 3 para Pifzer - 4 para Johnson ");
        laboratorioInt = parseInt(laboratorio);

        if(laboratorioInt == 1){
            coronavac++;
        }
        if(laboratorioInt == 2){
            astrazeneca++;
        }
        if(laboratorioInt == 3){
            pifzer++;
        }
        if(laboratorioInt == 4){
            johnsons++;
        }
        
        if(qtdDoseInt == 1){
            console.log("\nNÃO DEIXE DE TOMAR A SEGUNDA DOSE");
            doseUm++;
        }
        else{
            console.log("\nParabéns, você está imunizado!");
            doseDois++;
        }
    }


    entrevistado = prompt ("\nHá mais alguém para entrevista? (Digite 'S' para sim ou 'N' para não)");
    qtdEntrevistas ++;
}

console.log("\nO número de entrevistado(s) hoje foi de " + qtdEntrevistas + " entrevistas. \n");
console.log(doseZero + " entrevistados ainda não tomaram nenhuma dose");
console.log(doseUm + " entrevistados tomaram a primeira dose e estão aguardando a segunda.");
console.log(doseDois + " entrevistados já tomaram a segunda dose e estão imunizados.");
console.log("\nDos entrevistados, " + coronavac + " entrevistados receberam a dose da coronavac.");
console.log("Dos entrevistados, " + astrazeneca + " entrevistados receberam a dose da Astrazeneca.");
console.log("Dos entrevistados, " + pifzer + " entrevistados receberam a dose da Pifzer.");
console.log("Dos entrevistados, " + johnsons + " entrevistados receberam a dose da Johnsons.\n");

console.log("Fim da entrevista, Obrigado!");