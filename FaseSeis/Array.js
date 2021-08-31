const prompt = require("prompt-sync")();

//exemplo de apresentação de conteúdo de um  array.

let aluno = ["Gilnei", "Leandro", "Diego", "Marcella", "Carol"];
//aluno.sort();//coloca o conteúdo do array em ordem crescente.
let control = 0;
console.log(aluno);

/* for (i = 0; i < aluno.length; i++){//estrutura com FOR tradicional
    control = i;
    console.log(aluno[control]);
} */

/* for (i in aluno){//Entrutura FOR IN.
    control = i;
    console.log(aluno[control]);
} */

//Buscar valores num array, retorna o índice do valor.

/* let busca = prompt("Qual nome deseja buscar? ");
let result = aluno.indexOf(busca);

if (result == -1){//condição opcional para apresentação.
console.log("Nome não encontrado!");
}else{
    console.log("Posição no array: " + result);
} */


//Buscar pelo índice o conteúdo da posição no array.

/* let busca = parseInt(prompt("Qual posição deseja achar? "));
console.log(`O conteúdo do array na posição ${busca} é ${aluno[busca]}`); */


//Criando uma posição no array e adicionando valor.
    
/*console.log(`O array tem ${aluno.length} posições de tamanho.`);
let deseja = prompt("Deseja incluir item nome no array? s ou n ");

    if (deseja == "s" || "S"){
        
        aluno[aluno.length] = prompt(`Qual nome deseja incluir na nova posição ${aluno.length} do array? `);
    }
    
console.log(aluno); */