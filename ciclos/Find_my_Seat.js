/*
* Prueba de programación: Encuentra mi asiento (4-8)
*
* Escriba un bucle for anidado para imprimir todas las diferentes combinaciones de asientos en el teatro.
* La combinación de asientos de la primera fila debe ser 0-0
* La última combinación de asientos de fila será 25-99
*
* Cosas a tener en cuenta:
* - los números de fila y asiento comienzan en 0, no en 1
* - el número de asiento más alto es 99, no 100
* /

/ *
* REQUISITOS DEL EXAMEN
* - Su código debe usar un bucle "for" anidado
* - Su código debe producir el resultado esperado, como se explicó anteriormente
*/

var fila = 0;  // valor inicial de la fila
var asiento = 0; //valor inicial del asiento dentro de una fila
// Bucle externo `for`, para iterar sobre las filas
for (fila = 0; fila <= 25; fila++) {

    // Bucle interno `for`, para iterar sobre los asientos dentro de una fila
    // En este ciclo, el valor de la variable `fila` cambiaría solo después de 100 iteraciones
    for (asiento = 0; asiento <= 99; asiento++) {
        console.log(row + "-" + asiento);
    }
}