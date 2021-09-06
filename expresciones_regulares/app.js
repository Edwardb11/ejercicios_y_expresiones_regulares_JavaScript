//Vlidando que contengan esa letras o palabras 
var expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdef'));
var expresion2 = /Hola Mundo/;
console.log(expresion2.test('El primer programa es Hola Mundo'));

console.log('Evaluacion entre rangos');

//var expresion1 = /[0123456789]/;
var expresion1 = /[0-9a-zA-Z]/;

console.log(expresion1.test('Sucedió en 1996'));

/*

Grupos de caracteres
===

Grupo | Descripción
------|-----
\d  | Cualquier número  
\w  | Cualquier letra o número  
\s  | Cualquier espacio en blanco incluido tabs, salto de línea o similares  
\D  | Cualquier carácter que no sea un número  
\W  | Cualquier carácter que no sea alfanumérico  
\S  | Cualquier carácter que no sea un espacio en blanco  
.   | Cualquier carácter excepto nuevas líneas

*/



//Expresion de Cualquier número
console.log("Expresion de Cualquier número ");
//var expresion1 = /[0123456789]/;
var expresion1 = /\d\d-\d\d-\d\d\d\d/;
console.log(expresion1.test('29-10-2007'));

//ahi el patron no se cumple porque esta esperando dos digitos y esta recibiendo un texto
console.log(expresion1.test('29-junio-2007'));
//29-06-2007


//Expresion de negacion se usa ^
console.log("Expresion de negacion");
//var expresion1 = /[\d]/;

//console.log(expresion1.test('29-junio-2007'));
var expresion2 = /[^01]/;
console.log(expresion2.test('10101002100110001'));



console.log("Expresion de repeticiones ");
//simbolo de + significa que una expresion se puede repetir una o mas veces minimo 1 vez
//el aterisco * significa que puede repetirse 1 o mas veces pero tambien acepta que no este presente

//var expresion1 = /\d+/;
var expresion1 = /\d*/;
var expresion2 = /\d+/;

//console.log(expresion1.test('1997'));
console.log(expresion1.test('2008'));
//verdadero porque se reptie
console.log(expresion2.test(''));
//flase porque no se repite ni 1 vez
//  +   *


console.log("Patrones opcionales ?");

//Patrones opcionales ?

var expresion1 = /Hola mun?do/;

console.log(expresion1.test('Hola mundo'));

console.log("Contabilizar las veces que aparece un patron");

//primer elemento minimo y segundo maximo
//Contabilizar las veces que aparece un patron
var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;
console.log(expresion1.test('27-06-2007 11:45'));