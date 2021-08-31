/* Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10 */

const prompt = require("prompt-sync")();

let p1 = parseInt(prompt("Qual a nota de P1? "));
let p2 = parseInt(prompt("Qual a nota de P2? "));
let soma = p1 + p2;

if (soma <= 4){
    console.log("Reprovado.");
}
    if (((soma > 4) && (soma < 6))){
        console.log("Recuperação.");
    }
        if (((soma >= 6) && (soma < 8))){
            console.log("Aprovado.");
        }
            if (((soma >= 8) && (soma <= 10))){
                console.log("Destaque.");
            }
            