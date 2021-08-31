/* No programa “Conto nos dedos”, a criança diz até qual número quer contar, e os números aparecem na tela em sequência. Ela vai experimentar vários números, até que digite um zero para parar de contar. */

const prompt = require("prompt-sync")();

var contar  = 0;//parseInt(prompt("Até que número deseja contar? >>> "));
var control = 0;
var parar = 1;

do {

    contar  = parseInt(prompt("Até que número deseja contar? >>> "));
    control = 0;

    while (control < contar) {
                
        //contar--//contagem descrescente.
        //console.log(control);

        control++//contagem crescente.
        console.log(control);
    }

    parar  = parseInt(prompt("Digite 0 para parar ou 1 para continuar >>> "));

}while (parar != 0)
