/* Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
 */

const prompt = require("prompt-sync")();

var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;

var r1 = (x - y) > a;
var r2 = (x - y * a) > (c % y)
var r3 = y != c;
var r4 = (x * y) != c;
var r5 = (c % y) <= (y % c);
var r6 = a < b;
var r7 = ((z / a) + (x * y) - 5) >= b;
var r8 = (c * z + 2) == (a * x + y);
var r9 = c == (z + b);
var r10 = (y * 2) != (7 - b);

console.log("Resultado da expressão: x - y M a ---> " + r1);
console.log("Resultado da expressão: x - y * a M c mod y ---> " + r2);
console.log("Resultado da expressão: y <> c ---> " + r3);
console.log("Resultado da expressão: x * y <> c ---> " + r4);
console.log("Resultado da expressão: c mod y mi y mod c ---> " + r5);
console.log("Resultado da expressão: a m b ---> " + r6);
console.log("Resultado da expressão: z / a + x * y - 5 MI b ---> " + r7);
console.log("Resultado da expressão: c * z + 2 ig a * x + y ---> " + r8);
console.log("Resultado da expressão: c ig z + b ---> " + r9);
console.log("Resultado da expressão: y * 2 <> 7 - b ---> " + r10);