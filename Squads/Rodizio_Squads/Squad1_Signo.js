/*Proposição de Requisito: Squad 1.*/

/*Resolvido por Gilnei Lima. Squad 2*/

/* Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade. */

const prompt = require("prompt-sync")();

console.log("⭐⭐⭐[ SIGNO ]⭐⭐⭐");

var nome = prompt("Qual o seu nome? >>> ");
var nomeMaiusculo = nome.toUpperCase();

var mesNasc = prompt("Qual sua data de nascimento? dd/mm >>> ");
var dia = mesNasc.substring(0,2);
var diaInt = parseInt(dia);

var mes = mesNasc.substring(3,5);//recorta apenas o mês.
var mesInt = parseInt(mes);//Trnasforma a strindo do mês em inteiro.

var aleatorio = Math.floor(Math.random() * (12 - 1 + 1)) + 1;//cria número aleatório para indice do array descGen.
var casaSigno = 0;

var signos = [];
signos[1] = "♈ Áries";
signos[2] = "♉ Touro";
signos[3] = "♊ Gêmeos";
signos[4] = "♋ Câncer";
signos[5] = "♌ Leão";
signos[6] = "♍ Virgem";
signos[7] = "♎ Libra";
signos[8] = "♏ Escorpiao";
signos[9] = "♐ Sargitario";
signos[10] = "♑ Capricornio";
signos[11] = "♒ Aquário";
signos[12] = "♓ Peixes";

var descGen = [];
descGen[0] = "são definidos por sua força, impulsividade e impetuosidade. \nEles não refletem ou pensam antes de agir e isso fica muito claro em uma pequena discussão com os nativos desse signo.";
descGen[1] = "em síntese, são fortes e muito teimosos e, mais do que isso, eles são muito ciumentos e protetores. \nE a fama de gulosos? Sim, são apreciadores de boa comida e conforto. Todo mundo gosta, mas eles um pouco mais. Não por acaso são muito decididos e persistentes para conseguir o que almejam.";
descGen[2] = "esse signo tende a ser muito volúvel, mudando de opinião com muita felicidade. \nEntão, na prática você nunca sabe o que pode esperar deles. Eles são um pouco pavio curto, porém, gostam de viver grandes aventuras e cultivam um bom humor nato.";
descGen[3] = "são os mais dramáticos do zodíaco. \nNão por acaso, são muito sensíveis e emotivos, por isso, dão muito valor a intimidade e ao carinho. São caseiros por natureza e tem como epicentro a família. \nEles fazem amizade com muita facilidade, porém, eles são bastante instáveis. \nAlém disso, eles têm uma personalidade muito materna, e estão sempre cuidando de todos ao seu redor.";
descGen[4] = "gostam de chamar a atenção mesmo, pois eles vieram para tomar o lugar que é deles “por direito”. \nSão pessoas fortes, que presam a liberdade e são extravagantes por natureza. \nMas, apesar de serem muito comunicativos e abertos, eles possuem muita insegurança. \nAlém disso, eles sabem ser amáveis e muito leais. Prezam muito por serem exaltados, e a supervalorização de si mesmo é um ponto marcante desse signo.";
descGen[5] = "evitam conflito o máximo que podem, buscando sempre a imparcialidade quando se mete em um debate. \nSão diplomatas natos, tendo a capacidade de intervir entre dois pontos de vista opostos. \nEles possuem uma dificuldade muito grande de conseguir fazer escolhas, carregando uma fama de indecisos por isso.";
descGen[6] = "é o signo mais determinado do zodíaco, indo até as última consequências para alcançar aquilo que deseja. \nCom uma personalidade forte, os nativos desse signo tendem a ser pessoas bastante geniosas e meticulosas. \nMas, principalmente teimosas. São do tipo que valorizam muito a sua própria opinião.";
descGen[7] = "são pessoas que estão sempre com um sorriso no rosto, buscando o que a de melhor na vida. \nDesse modo, são muito engraçados e tendem a arrancar um sorriso de todo mundo que encontrar.";
descGen[8] = "pode até parecer um pouco fechado e meio antipático. \nMas ele só é tímido. Então, entre as principais características desse signo, podemos dizer que ele é muito trabalhador e determinado. \nAlém disso, sua vida profissional é muito importante para ele.";
descGen[9] = "é um ser independente, que preza muito por sua liberdade. \nAliás, a busca por liberdade é sua principal característica, juntamente com a rebeldia. São muito inteligentes e idealistas. \nTambém apreciam arte e cultura, sendo pessoas muito criativas e desapegadas.";
descGen[10] = "é o signo mais adorável do zodíaco. \nSão pessoas encantadoras, charmosas, sonhadoras e gentis. \nContudo, um tanto quanto carente. \nSão bondosos e gostam de ajudar, além de serem muito espiritualizados.";
descGen[11] = "é sinônimo de organização e padrões, o que é bom mas pode incomodar um pouco o restante do zodíaco. \nÉ um signo que nasceu para o sucesso, e ele fará de tudo para conquistar tudo aquilo que deseja, custe o que custar. \nEles costumam ser rígidos com eles mesmos e com quem está a sua volta, cobrando muito, até mesmo por serem extremamente perfeccionistas. \nMas não se engane, eles são muito tímidos.";


if (diaInt <= 31){
    if (mesInt <= 12){
        casaSigno = signos[mesInt];
        console.log(nomeMaiusculo + " veja o que seu signo tem reservado para você hoje:\n");
        console.log(casaSigno + ": " + descGen[aleatorio]);
    }
    else{
        console.log("DIGITE UMA DATA VÁLIDA");
    }
}
else{
    console.log("DIGITE UMA DATA VÁLIDA");
}