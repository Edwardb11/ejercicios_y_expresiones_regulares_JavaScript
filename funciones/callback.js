// expresión de función catSays
var catSays = function (max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};

// declaración de función helloCat aceptando una devolución de llamada(Callback)  function helloCat(callbackFunc) {
function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
}

// pasar catSays como una función de devolución de llamada
console.log(helloCat(catSays));





/*
  * Prueba de programación: risa (5-4)
  * /

/ *
  * REQUISITOS DEL EXAMEN
  * - Tu código debe tener una variable "risa"
  * - Su código debe incluir una expresión de función anónima almacenada en la variable `risa`
  * - Su expresión de función anónima debe tomar un argumento
  * - La expresión de su función anónima debe devolver el número correcto de `jajaja` \ '
  */

var sonido = "";
var risa = function (num) {
    for (var x = 0; x < num; x++) {
        sonido = sonido + "ha";
    }
    sonido = sonido + "!";
    return sonido;
}


console.log(risa(10));
