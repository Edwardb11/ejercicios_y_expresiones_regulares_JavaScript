// Se this establece un valor para cuando se invoca un método en un objeto, y ese valor se refiere a ese objeto .
//  Dado que es una palabra reservada, no debe
//  usarse como nombre de variable, nombre de función, etc.
function Cat(name) {
 this.name = name;
 this.sayName = function () {
   console.log(`Meow! My name is ${this.name}`);
 };
}

const bailey = new Cat('Bailey');

// En el Cat()constructor anterior , la función que hace sayNamereferencia this.name.vimos que se thisusa en métodos . 
// Pero en este Cat() caso, ¿a qué se this refiere exactamente ?

// Resulta que cuando se invoca una función de constructor con el newoperador, ¡ this se establece en el objeto recién creado ! Veamos cómo
// se bailey ve el nuevo objeto:

{
  name: 'Bailey',
  sayName: function () {
    console.log(`Meow! My name is ${this.name}`);
  }
}

// En el fragmento de arriba, observe que thisestá fuera de una función constructora (es decir, en un método). Como vimos en la Lección 1,
//  cuando dices thisen un método, lo que realmente estás diciendo es "este objeto" o "el objeto a mano". Como resultado, el sayName()
//  método puede usarse thispara acceder a la namepropiedad de ese objeto. Esto hace posible la siguiente llamada al método:

bailey.sayName();

// 'Meow! My name is Bailey'


const dog = {
    bark: function () {
      console.log('Woof!');
    },
    barkTwice: function () {
      this.bark();
      this.bark();
    }
  };


  dog.bark();
// Woof!

dog.barkTwice();
// Woof!
// Woof!


//Considere la siguiente función constructora City:
function City(name, population) {
    this.name = name;
    this.population = population;
  
    this.identify = function () {
      console.log(`${this.name}'s population is ${this.population}.`);
    };
  }

//   Se ejecuta lo siguiente:

const sanFrancisco = new City('San Francisco', 870000);
// ¿Cuál es el valor de this?

//Se ejecuta lo siguiente:

// El objecto creado llamado sanFrancisco 
// Dependiendo de cómo se invoque una función, el valor de thisse establece en un valor diferente.

/*


//Resumen
Funciones, objetos y this todos están interconectados. Cuando se invoca funciones de constructor con el new operador,
 this se establece una variable en el objeto recién creado. Cuando se invoca un método en un objeto, thisse establece en ese objeto en sí.
  Y cuando se invoca una función en un entorno de navegador, this se establece en window, también conocido como objeto global.

Junto con todo esto, hay un conjunto más de formas de invocar funciones: con apply()y con call(). Ambos métodos comparten bastantes similitudes
 y cada uno nos permite especificar cómo queremos configurar this. ¡Echaremos un vistazo a cada uno de ellos en detalle a continuación!
*/