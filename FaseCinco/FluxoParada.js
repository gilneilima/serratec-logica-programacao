//break
for (var i = 0; i < 10; i++) {
    console.log("O valor de i " + i);

    if (i == 5){
        //i = 45;//evitar atribuir na variável de controle.
        break;
        console.log("Fora do laço");//ficou transparente pq o break não deixa executar.
    }
}

console.log("Fora do laço");// programa continua daqui.

// continue
for (var i = 0; i < 10; i++){
    if (i == 5){
        console.log("cheguei na metade");
        continue;
    }
    
    console.log("Estamos no valor de i: " + i);
}