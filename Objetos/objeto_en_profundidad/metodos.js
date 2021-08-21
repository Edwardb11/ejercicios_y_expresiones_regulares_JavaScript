// Añadir propiedades y metodo
const printer = {};

printer.on = true;
printer.mode = 'black and white';
printer['remainingSheets'] = 168;
printer.print = function () {
    console.log('The printer is printing!');
};

console.log(printer.print());
/*
{
  on: true,
  mode: 'black and white',
  remainingSheets: 168,
  print: function () {
    console.log('The printer is printing!');
  }
}
*/

//eliminar propiedades o metodo

delete printer.mode;



const developer = {
    name: 'Andrew',
    sayHello: function () {
        console.log('Hi there!');
    },
    favoriteLanguage: function (language) {
        console.log(`My favorite programming language is ${language}`);
    }
};


developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'


/*

Crea un objeto llamado `camaleón` con dos propiedades:

1. "color", cuyo valor se establece inicialmente en "verde" o "rosa"
2. `changeColor`, una función que cambia el` color` de `camaleón` a 'rosa'
     si es 'verde', o a 'verde' si es 'rosa'
*/
const chameleon = {
    color: 'green',
    changeColor: function () {
        if (this.color === 'green') {
            this.color = 'pink';
        } else {
            this.color = 'green';
        }
    }
}
console.log(chameleon.changeColor());


const iceCreamTotals = {
    Veronika: 600,
    Andrew: 711,
    Jessica: 818,
    David: 9001,
    Richard: 1000000
};

const result = [];

for (const name in iceCreamTotals) {
    result.push(name);
}

console.log(result);
// [ 'Veronika', 'Andrew', 'Jessica', 'David', 'Richard' ]

Object.keys(iceCreamTotals);
// ['Veronika', 'Andrew', 'Jessica', 'David', 'Richard']

Object.values(iceCreamTotals);
  // [600, 711, 999, 9001, 1000000]