/*
  * Prueba de programación: Ríase 2 (5-2)
  *
  * Escriba una función llamada `risa` con un parámetro llamado` num` que represente el número de "ha" que se devolverán.
  *
  * Nota:
  * - asegúrese de que el carácter final sea un signo de exclamación ("!")
  * - asegúrese de que su función produzca los resultados correctos cuando se la llame varias veces
  * /

/ *
  * REQUISITOS DEL EXAMEN
  * - Tu código debe tener una función `reír ()`
  * - Tu función `laugh ()` debe tener un parámetro llamado `num`
  * - Tu función `laugh ()` debería devolver el número correcto de risas
  */

var sonido = "";
function reir(num) {
    for (var x = 0; x < num; x++) {
        sonido = sonido + "ha";
    }
    sonido = sonido + "!";
    return sonido;
}

console.log(reir(3));