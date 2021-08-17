/*
  * Prueba de programación: funciones en línea (5-6)
  * /
 
  / *
  * REQUISITOS DEL EXAMEN
  * - Su código debe tener una función `emotion ()`
  * - Su código debe llamar a la función `emotion ()`
  * - Su llamada a la función `emotion ()` debe tener una expresión de función en línea pasada como segundo parámetro
  * - La expresión de su función debe devolver el resultado esperado
  */

// definición de la función emociones ()
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// tu código va aquí
// Llamar a la función emotion () con dos argumentos
// Argumento 1 - cadena "feliz"
// Argumento 2 - una expresión de función en línea

emotions("happy", function (num) {
    var sound = ""; // Local variable
    //Iterate
    for (var i = 0; i < num; i++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
});

