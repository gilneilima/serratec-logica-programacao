/* O menino, os tênis e os apitos
Observe as quatro equações abaixo, a partir das quais você pode identificar que cada figura (menino, tênis e apitos) possui um valor diferente. Seu desafio é descobrir qual é o resultado da última equação. Preste muita atenção, pois os detalhes fazem a diferença! */

const prompt = require("prompt-sync")();
//

var meninoApito = 5;
var parTenis = 10;
var apito = 2;


resultado = (parTenis / 2) + (meninoApito - apito) * apito;

console.log("O resultado da equação: tênis + menino x apito é " + resultado);