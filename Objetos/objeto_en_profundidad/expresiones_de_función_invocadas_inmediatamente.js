/* 
Expresiones de función invocadas inmediatamente: estructura y sintaxis
Una expresión de función invocada inmediatamente, o IIFE (pronunciado dudoso ), es una función que se llama inmediatamente después de su definición. Mira el siguiente ejemplo:

(function sayHi(){
    alert('Hi there!');
  }
)();

// alerts 'Hi there!'

(function (x, y){
    console.log(x * y);
  }
)(2, 3);



*/
/*
IIFE y ámbito privado
Uno de los usos principales de los IIFE es crear un ámbito privado (es decir, un estado 
privado). Recuerde que las variables en JavaScript tienen tradicionalmente el alcance de
 una función. Sabiendo esto, podemos aprovechar el comportamiento de los cierres para
  evitar que se acceda a las variables o métodos. Considere el siguiente ejemplo de un 
  cierre simple dentro de un IIFE, al que hace referencia myFunction: */

const myFunction = (
  function () {
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();

/*

💡 Sintaxis alternativa para IIFE's 💡
Recuerde el ejemplo del principio de esta sección:
*/
(function sayHi(){
   alert('Hi there!');
 }
)();

// alerts 'Hi there!'
//Esto funciona muy bien, ¡pero también hay otra forma en que podemos escribir esto para lograr los mismos resultados! El primer conjunto de paréntesis puede envolver toda la expresión. Es decir, podemos mover el primer paréntesis de cierre hasta el final:

(function sayHi(){
   alert('Hi there!');
}());

alerts 'Hi there!'
/*
// 
Nuevamente, el uso de cualquiera de los enfoques seguirá produciendo el mismo resultado: alertas 'Hi there!'en el navegador.

Ahora bien, ¿cuándo elegiría una forma sobre la otra? Mucho de esto es una elección estilística; no existe una forma "correcta" de ejecutar automáticamente una función anónima. Ambos son enfoques válidos para lograr el mismo resultado, y el motor de JavaScript aún los analizará como una expresión de función (es decir, en lugar de como una declaración de función ).

Entre los desarrolladores, Douglas Crockford ha mencionado que poner toda la unidad entre paréntesis (como se presentó directamente arriba) ayuda a los lectores a comprender que lo que están viendo es de hecho una expresión. No dudes en consultar su chat aquí .

Con todo, ¡la forma en que decida formar sus expresiones de función invocadas inmediatamente depende de usted!
*/