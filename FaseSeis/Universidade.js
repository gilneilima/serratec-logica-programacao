/* Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato. */

const prompt = require("prompt-sync")();

let numBoleto = parseInt(prompt("Qual o número do boleto? "));
let dataBoleto = prompt("Qual a data do boleto? dd/mm/aa ");
let diaBoleto = dataBoleto.substring(0,2);
let diaHoje = 10;
let desconto = 0;

if (((diaBoleto >= 10) && (diaBoleto <= 13))){
    desconto = true;
    console.log("Dia hoje: " + diaHoje);
    console.log("Número do boleto: " + numBoleto);
    console.log("Dia de pagamento: " + diaBoleto);
    console.log("Desconto na próxima fatura? " + desconto);


}else{
    desconto = false;
    console.log("Dia hoje: " + diaHoje);
    console.log("Número do boleto: " + numBoleto);
    console.log("Dia de pagamento: " + diaBoleto);
    console.log("Desconto na próxima fatura? " + desconto);
}