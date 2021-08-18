/*
  * Prueba de programación: El precio es correcto (6-3)
  * /
/ *
  * REQUISITOS DEL EXAMEN
  * - Su código debe tener una variable `precios`
  * - La variable `precios` debe ser una matriz con valores diferentes para el 1er, 3er y 7mo elemento
  * - Su código debe imprimir "precios" en la consola como una matriz. No iterar sobre los elementos.
  */
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
for (var index = 0; index < prices.length; index++) {
    // cambia el valor del primer elemento
    if (index === 0) {
        prices[index] = 11;
    }
    // cambia el valor del tercer elemento
    else if (index === 2) {
        prices[index] = 33;
    }
    // cambia el valor del séptimo elemento
    else if (index === 6) {
        prices[index] = 77;
    }
}
console.log(prices);