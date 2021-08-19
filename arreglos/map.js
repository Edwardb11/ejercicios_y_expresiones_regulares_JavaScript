//El uso de forEach () no será útil si desea modificar permanentemente la matriz original.
// forEach () siempre devuelve undefined. Sin embargo, crear una nueva matriz a partir de 
//una matriz existente es simple con el poderoso método map ().

//Con el método map (), puede tomar una matriz, realizar alguna operación en cada 
//elemento de la matriz y devolver una nueva matriz.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function (donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    return donut;
});
console.log(improvedDonuts);

/*
  * Prueba de programación: Tengo facturas (6-9)
  *
  * Use el método .map () para tomar la matriz de facturas a continuación y crear una segunda matriz
  * de números llamados totales. La matriz de totales debe contener cada cantidad de la
  * Matriz de facturas pero con una propina del 15% añadida. Registre la matriz de totales en la consola.
  *
  * Por ejemplo, las dos primeras entradas en la matriz de totales serían:
  *
  * [57.76, 21.99, ...]
  *
  * Cosas a tener en cuenta:
  * - cada entrada en la matriz de totales debe ser un número
  * - cada número debe tener una precisión de dos puntos decimales
  * /
 
  / *
  * REQUISITOS DEL EXAMEN
  * - Su código debe tener las variables `facturas` y` totales`
  * - Su matriz de `facturas` debe llamar al método` map () `y almacenar el retorno de` map () `en la matriz de` totales`
  * - Su matriz de `totales` debe ser una matriz de números
  * - Su código debe imprimir la matriz `totals` en la consola
  * - La salida debe ser como se describe arriba.
  */


var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function (element) {
    element *= 1.15;
    element = element.toFixed(2);
    element = Number(element);

    return element;
});


/*
// Method 2
var totals = bills.map(function(element) {
    element *= 1.15;
    return Number(element.toFixed(2));
});
*/
console.log(totals);