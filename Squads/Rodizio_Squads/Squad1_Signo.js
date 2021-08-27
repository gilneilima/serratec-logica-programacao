/* Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade. */

const prompt = require("prompt-sync")();

console.log("⭐⭐⭐[ SIGNO ]⭐⭐⭐");

var nome = prompt("Qual o seu nome? >>> ");
var data = prompt("Qual sua data de nascimento?dd/mm >>> ");

var nomeMaiusculo = nome.toUpperCase();
var dataNasc = data.substring(0,5);

var dia = dataNasc.substring(0,2);//recorta dia.
var diaInt = parseInt(dia);//Transforma a string dia do mês em inteiro

var mes = dataNasc.substring(3,5);//recorta apenas o mês.
var mesInt = parseInt(mes);//Trnasforma a string do mês em inteiro.

var aleatorio = Math.floor(Math.random() * (12 - 1 + 1)) + 1;//cria número aleatório para indice do array descGen.

var signos = [];
signos[0] = "♈ Áries: ";
signos[1] = "♉ Touro: ";
signos[2] = "♊ Gêmeos: ";
signos[3] = "♋ Câncer: ";
signos[4] = "♌ Leão: ";
signos[5] = "♍ Virgem: ";
signos[6] = "♎ Libra: ";
signos[7] = "♏ Escorpião: ";
signos[8] = "♐ Sagitário: ";
signos[9] = "♑ Capricórnio: ";
signos[10] = "♒ Aquário: ";
signos[11] = "♓ Peixes: ";

var descGen = [];
descGen[0] = "são definidos por sua força, impulsividade e impetuosidade. Eles não refletem ou pensam antes de agir e isso fica muito claro em uma pequena discussão com os nativos desse signo.";
descGen[1] = "em síntese, são fortes e muito teimosos e, mais do que isso, eles são muito ciumentos e protetores. E a fama de gulosos? Sim, são apreciadores de boa comida e conforto. Todo mundo gosta, mas eles um pouco mais. Não por acaso são muito decididos e persistentes para conseguir o que almejam.";
descGen[2] = "esse signo tende a ser muito volúvel, mudando de opinião com muita felicidade. Então, na prática você nunca sabe o que pode esperar deles. Eles são um pouco pavio curto, porém, gostam de viver grandes aventuras e cultivam um bom humor nato.";
descGen[3] = "são os mais dramáticos do zodíaco. Não por acaso, são muito sensíveis e emotivos, por isso, dão muito valor a intimidade e ao carinho. São caseiros por natureza e tem como epicentro a família. Eles fazem amizade com muita facilidade, porém, eles são bastante instáveis. Além disso, eles têm uma personalidade muito materna, e estão sempre cuidando de todos ao seu redor.";
descGen[4] = "gostam de chamar a atenção mesmo, pois eles vieram para tomar o lugar que é deles “por direito”. São pessoas fortes, que presam a liberdade e são extravagantes por natureza. Mas, apesar de serem muito comunicativos e abertos, eles possuem muita insegurança. Além disso, eles sabem ser amáveis e muito leais. Prezam muito por serem exaltados, e a supervalorização de si mesmo é um ponto marcante desse signo.";
descGen[5] = "evitam conflito o máximo que podem, buscando sempre a imparcialidade quando se mete em um debate. São diplomatas natos, tendo a capacidade de intervir entre dois pontos de vista opostos. Eles possuem uma dificuldade muito grande de conseguir fazer escolhas, carregando uma fama de indecisos por isso.";
descGen[6] = "é o signo mais determinado do zodíaco, indo até as última consequências para alcançar aquilo que deseja. Com uma personalidade forte, os nativos desse signo tendem a ser pessoas bastante geniosas e meticulosas. Mas, principalmente teimosas. São do tipo que valorizam muito a sua própria opinião.";
descGen[7] = "são pessoas que estão sempre com um sorriso no rosto, buscando o que a de melhor na vida. Desse modo, são muito engraçados e tendem a arrancar um sorriso de todo mundo que encontrar.";
descGen[8] = "pode até parecer um pouco fechado e meio antipático. Mas ele só é tímido. Então, entre as principais características desse signo, podemos dizer que ele é muito trabalhador e determinado. Além disso, sua vida profissional é muito importante para ele.";
descGen[9] = "é um ser independente, que preza muito por sua liberdade. Aliás, a busca por liberdade é sua principal característica, juntamente com a rebeldia. São muito inteligentes e idealistas. Também apreciam arte e cultura, sendo pessoas muito criativas e desapegadas.";
descGen[10] = "é o signo mais adorável do zodíaco. São pessoas encantadoras, charmosas, sonhadoras e gentis. Contudo, um tanto quanto carente. São bondosos e gostam de ajudar, além de serem muito espiritualizados.";
descGen[11] = "é sinônimo de organização e padrões, o que é bom mas pode incomodar um pouco o restante do zodíaco. É um signo que nasceu para o sucesso, e ele fará de tudo para conquistar tudo aquilo que deseja, custe o que custar. Eles costumam ser rígidos com eles mesmos e com quem está a sua volta, cobrando muito, até mesmo por serem extremamente perfeccionistas. \nMas não se engane, eles são muito tímidos.";


if (diaInt >= 1 && diaInt <= 31) {//retorna verdade.
    if (mesInt >= 1 && mesInt <= 12){//retorna verdade.
        
        if ((mesInt == 3 && diaInt >= 21 || mesInt == 4 && diaInt <= 20)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[0] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 4 && diaInt >= 21 || mesInt == 5 && diaInt <= 20)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[1] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 5 && diaInt >= 21 || mesInt == 6 && diaInt <= 20)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[2] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 6 && diaInt >= 21 || mesInt == 7 && diaInt <= 22)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[3] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 7 && diaInt >= 23 || mesInt == 8 && diaInt <= 22)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[4] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 8 && diaInt >= 23 || mesInt == 9 && diaInt <= 22)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[5] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 9 && diaInt >= 23 || mesInt == 10 && diaInt <= 22)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[6] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 10 && diaInt >= 23 || mesInt == 11 && diaInt <= 21)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[7] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 11 && diaInt >= 22 || mesInt == 12 && diaInt <= 21)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[8] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 12 && diaInt >= 22 || mesInt == 1 && diaInt <= 20)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[9] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 1 && diaInt >= 21 || mesInt == 2 && diaInt <= 18)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[10] + ": " + descGen[aleatorio]);
            }
        if ((mesInt == 2 && diaInt >= 19 || mesInt == 3 && diaInt <= 20)){
            console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
            console.log(signos[11] + ": " + descGen[aleatorio]);
            }
    }else {
        console.log("DIGITE UMA DATA VÁLIDA");
    }
}else {
    console.log("DIGITE UMA DATA VÁLIDA");
}
