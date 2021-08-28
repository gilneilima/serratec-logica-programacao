/* O “gerador de tabela verdade” solicita ao aluno de programação qual operador lógico quer visualizar (e, ou), e depois imprime na tela a tabela verdade montada em um laço. 

Operador E ou AND: p=V | q=V | p→q=V; p=V | q=F | p→q=F; p=F | q=V | p→q=F; p=F | q=F | p→q=F
Operador Ou ou Or: p=V | q=V | p→q=V; p=V | q=F | p→q=V; p=F | q=V | p→q=V; p=F | q=F | p→q=F */


const prompt = require("prompt-sync")();

var p = 0;
var q = 0;
var R = 0;

for (i = 0; i < 4; i++){// repete as instruções enquanto contador menor que 4.
    
    if (i == 0 || i == 1){//IF para dentre os 4 resultados, alterar duas opções do valor booleano, para fazer o cálculo.
        p = true;//duas vezes como true
    
    }else{
        p = false;//duas vezes como false
    }

    q = (i == 0 || i == 2);//fora do laço para atribuir o valor de q como true ou false.
    //R = (p && q);//tabela verdade de AND
    R = (p || q);//tabela verdade de OR

    console.log(p + "|" + q + "|" + R);
}