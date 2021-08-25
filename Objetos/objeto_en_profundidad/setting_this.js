call()
// call () es un método que se invoca directamente en una función. Primero le pasamos un valor único para establecer como el valor de este;
//  luego pasamos cualquiera de los argumentos de la función receptora uno por uno, separados por comas.

// Considere la siguiente función, multiplicar (), que simplemente devuelve el producto de sus dos argumentos:
function multiply(n1, n2) {
    return n1 * n2;
}
// Invoquémoslo en la consola:

multiply(3, 4);

// 12
// ¡No hay sorpresas aquí! Pero ahora, usemos el método call () para invocar la misma función:

multiply.call(window, 3, 4);

// 12

/*
¡Obtenemos el mismo resultado! ¿Cómo pasó esto? Primero invocamos el método call () directamente en la función multiplicar ().
Tenga en cuenta que la .call anterior a la multiplicación (window, 3, 4) no va seguida de ningún paréntesis. call () manejará la
invocación y los argumentos de la función multiply ().

Después de escribir esa parte, ¡es hora de pasar los argumentos! Para el primer argumento del método call (), pasamos el valor que
se establecerá como this, que es window. Luego terminamos pasando los argumentos de la función multiplicar () individualmente,
 separados por comas.

Una vez multiplicar. Llamar (window, 3, 4); ejecuta, la función será invocada con el valor dado de this, y el resultado que vemos es
12. Fuera del modo estricto, ambas formas de invocar multiplicar () arriba son equivalentes.

Además de invocar funciones regulares, ¿cómo hacemos para invocar funciones adjuntas a objetos (es decir, métodos)? Aquí es donde
 realmente brilla el poder de call (). Usar call () para invocar un método nos permite "tomar prestado" un método de un objeto -
 ¡luego usarlo para otro objeto! Mira el siguiente objeto, ruiseñor:

*/

const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
        console.log(`${this.title} is a classic novel`);
    }
};

mockingbird.describe();

// 'To Kill a Mockingbird is a classic novel'

// usa call (), sin embargo, el siguiente objeto pride puede utilizar el método describe () de Mockingbird:
const pride = {
    title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'


// apply()
// Al igual que call(), el método apply() se llama en una función no solo para invocar esa función, sino también para asociarle un valor 
// específico de esta.Sin embargo, en lugar de pasar los argumentos uno por uno, separados por comas, apply() toma los argumentos de la 
// función en una matriz.Recuerde la función multiplicar() de antes:

//Usamos call () y pasamos argumentos individualmente:
multiply.call(window, 3, 4);

// 12

// Sin embargo, al usar apply (), recopilamos todos los argumentos de la función multiplicar () en una matriz. Luego,
//  pasamos toda esa matriz a apply ():

multiply.apply(window, [3, 4]);

// 12

const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
        console.log(`${this.title} is a classic novel`);
    }
};


const pride = {
    title: 'Pride and Prejudice'
};

// Anteriormente, usamos call () para permitir que el objeto pride "tome prestado" el método describe () de Mockingbird:

mockingbird.describe.call(pride);

// 'Pride and Prejudice is a classic novel'

// ¡Podemos lograr el mismo resultado usando apply ()!
mockingbird.describe.apply(pride);

// 'Pride and Prejudice is a classic novel'

const andrew = {
    name: 'Andrew'
};

function introduce(language) {
    console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

introduce.call(andrew, 'JavaScript')

// Callbacks and this
// El valor de esto tiene algunos problemas de alcance potenciales cuando están involucradas las funciones de devolución de llamada,
//  y las cosas pueden complicarse un poco. Veámoslo a continuación.


function invokeTwice(cb) {
    cb();
    cb();
}

const dog = {
    age: 5,
    growOneYear: function () {
        this.age += 1;
    }
};

const myGrow = dog.growOneYear.bind(dog);

dog.age;
// 7

// Considerando
const driver = {
    name: 'Danica',
    displayName: function () {
        console.log(`Name: ${this.name}`);
    }
};

const car = {
    name: 'Fusion'
};
//  Escriba una expresión usando bind()que nos permita "tomar prestado" el
// displayName()método driverpara que el carobjeto lo use.Nota: La expresión 
//  en sí es suficiente(no es necesario guardarla en una variable).


const newFunction = driver.displayName.bind(car);
//delete driver.displayName;

console.log(driver.displayName);
newFunction();

// Resumen
// JavaScript proporciona tres métodos que nos permiten establecer el valor de thispara una función determinada:

// call() invoca la función y tiene argumentos pasados ​​individualmente, separados por comas.
// apply()es similar a call(); invoca la función de la misma manera, pero los argumentos se pasan como una matriz.
// bind()devuelve una nueva función thisvinculada a un objeto específico, lo que nos permite llamarla como una función regular.
