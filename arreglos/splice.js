/*
  * Prueba de programación: Colores del arco iris (6-4)
  *
  * Utilice solo el método splice () para modificar la variable arcoíris:
  * - eliminar "Blackberry"
  * - agregue "Amarillo" y "Verde"
  * - agregue "Púrpura"
  */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

/// Desde la posición de índice 2, elimine 1 elemento. Luego, agregue todos los elementos mencionados en el argumento.
rainbow.splice(2, 1, "Yellow", "Green");

// Desde la posición del índice 5, elimine 0 elementos. Esto significa que no se elimina ningún elemento.
// Luego, agregue todos los elementos mencionados en el argumento.
rainbow.splice(5, 0, "Purple");

//Print
console.log(rainbow);