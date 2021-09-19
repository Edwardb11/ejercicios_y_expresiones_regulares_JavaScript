//var mensaje = 'Estahistoriacontinuara';
var mensaje = 'Esta historia continuara';


//  \W  Cualquier carácter que no sea alfanumérico
//  \S Cualquier carácter que no sea un espacio en blanco

console.log(mensaje.search(/\W/)); //return 4
console.log(mensaje.search(/\S/)); //return 0