/*Proposição de Requisito: Squad 3*/

/*Resolvido por Diego Faria. Squad 2*/

/*## Descrição:
Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está
sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos
dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem
ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas
decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está
iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo
usuário não pode ser o mesmo da recomendação. */

var ler = require("prompt-sync")();

console.log("📕📗📘 Calculadora de páginas 📘📗📕\n");

var livro = ler("Qual livro você está lendo? ");

var livroIndicacao = ["revolucao dos bichos", "o alienista", "o homen invisivel", "eu, robo", "moby dick", "duna"];


do{
    var qtdPaginas = ler("Quantas páginas o livro tem? ");
    var qtdDias = ler("Precisa ler o livro em quantos dias? ");

    if((qtdDias < 1) || (qtdPaginas < 1)){
    console.log("Você digitou um número inválido. Tente novamente.");
    }
} while ((qtdDias < 1) || (qtdPaginas < 1));

var calculoDias = Math.ceil(qtdPaginas/qtdDias);

console.log("Você deverá ler " + calculoDias + " páginas por dia para terminar seu livro no tempo estipulado. 📖");

if(qtdPaginas <= 100){
    if(livro == livroIndicacao[0]){
        console.log("🔖Indicação de leitura: Após terminar de ler " + livro + ".");
        console.log("Indicamos que leia o livro O Alienista");
        console.log("Temos certeza que irá adorar!");
    }else{
        console.log("🔖Indicação de leitura: Após terminar de ler " + livro + ".");
        console.log("Indicamos que leia o Revolução doa Bichos.");
        console.log("Temos certeza que irá adorar!");
    }
}else if((qtdPaginas > 100) && (qtdPaginas <= 499)){
        if(livro == livroIndicacao[2]){    
            console.log("🔖Indicação de leitura: Após terminar de ler " + livro + ".");
            console.log("Indicamos que leia o livro Eu, Robo.");
            console.log("Temos certeza que irá adorar!");
        }else{
            console.log("🔖Indicação de leitura: Após terminar de ler " + livro + ".");
            console.log("Indicamos que leia o livro O Homem Invisivel.");
            console.log("Temos certeza que irá adorar!");
        }
    }else if (qtdPaginas >= 500){
        if(livro == livroIndicacao[4]){   
            console.log("🔖Indicação de leitura: Após terminar de ler " + livro + ".");
            console.log("Indicamos que leia o livro Duna.");
            console.log("Temos certeza que irá adorar!");
        }else{
            console.log("🔖Indicação de leitura: Após terminar de ler " + livro + ".");
            console.log("Indicamos que leia o Moby Dick.");
            console.log("Temos certeza que irá adorar!");
        }
    }
console.log("Obrigado e Boa Leitura!")
