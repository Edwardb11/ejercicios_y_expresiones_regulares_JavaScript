/*

Declare una función denominada "HigherOrderFunction" que no acepta argumentos,
y devuelve una función anónima.

La función devuelta en sí misma tampoco toma argumentos, y simplemente
devuelve el número 8.

*/

function HigherOrderFunction() {
    return function () {
        return 8;
    }
}
console.log(HigherOrderFunction()())

//callback

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
}

function returnsThree() {
    return 3;
}

let result = callAndAdd(2, returnsThree);

console.log(result);
// 5


//prueba para llamar solamente los numeros que son positivos anonima
function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i]);
        }
    }
}

function isPositive(n) {
    return n > 0;
};

each([-2, 7, 11, -4, -10], isPositive);


/*Métodos de matriz
¿Dónde probablemente ha visto el uso de funciones de devolución de llamada?
¡En métodos de matriz! Las funciones se pasan comúnmente a métodos de matriz
y se llaman a elementos dentro de una matriz (es decir, la matriz en la que
se llamó al método).

Veamos un par en detalle:

forEach()
map()
filter()
*/

//forEach () le permite iterar (es decir, bucle) a través de una matriz, similar a usar un bucle for.

function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
}



logIfOdd(2);
// (nothing is logged)

logIfOdd(3);
// 3

[1, 5, 2, 4, 6, 3]

//¡Podemos iterar a través de la matriz anterior con forEach () y simplemente pasarle la función logIfOdd ()!
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});


//refactor
[1, 5, 2, 4, 6, 3].forEach(function (n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});


const favoriteFlavors = ['cookie dough', 'salted caramel', 'toffee'];

favoriteFlavors.forEach(function (flavor) {
    // debugger;
    console.log('I enjoy ' + flavor + ' ice cream!');
});


/*map()
El método map () de Array es similar a forEach () en que invoca una función de
devolución de llamada para cada elemento de una matriz. Sin embargo, map () 
devuelve una nueva matriz basada en lo que devuelve la función de devolución
 de llamada. Mira lo siguiente:
 */


const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function (name) {
    return name.length;
});
console.log(nameLengths)
//lo que está sucediendo aquí. El método map () funciona en matrices, por lo que 
//debemos tener una matriz para empezar:

const names = ['David', 'Richard', 'Veronika'];
//Llamamos map () en la matriz de nombres y le pasamos una función anónima como
// argumento:

names.map(function (name) {
    return name.length;
});
//¡La función que se pasa a map () se llama para cada elemento de la matriz de
// nombres! La función recibe el primer nombre en la matriz, lo almacena en
// la variable de nombre y devuelve su longitud. Luego lo hace de nuevo para 
//los dos nombres restantes.

//Diferencia clave entre forEach () y map () es que forEach () no devuelve nada, 
//mientras que map () devuelve una nueva matriz con los valores devueltos por 
//la función:

const nameLengths = names.map(function (name) {
    return name.length;
});
//Así que nameLengths será una nueva matriz: [5, 7, 8].Nuevamente, es importante
//comprender que el método map() devuelve una nueva matriz; no modifica la matriz original.



/* Usando map ()
  *
  * Usando la matriz musicData y map ():
  * - Devuelve una cadena para cada elemento de la matriz en el siguiente formato:
  * <album-name> de <artist> vendió copias de <sales>
  * - Almacene los datos devueltos en una nueva variable albumSalesStrings
  *
  * Nota:
  * - No elimine la variable musicData
  * - No altere ninguno de los contenidos de musicData
  * - No formatee el número de venta; déjelo como una larga cadena de dígitos
  */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    {
        artist: 'Original Broadway Cast Recording',
        name: 'Hamilton: An American Musical', sales: 820000
    },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function (item) {
    return item.name + ' by ' + item.artist + ' sold ' + item.sales + ' copies';
});

console.log(albumSalesStrings);



/*
filter()
El método filter() de Array es similar al método map():

Se llama en una matriz
Toma una función como argumento
Devuelve una nueva matriz

La diferencia es que la función pasada a filter() se usa como prueba, y solo
los elementos de la matriz que pasan la prueba se incluyen en la nueva matriz.
Considere el siguiente ejemplo:
*/

const names = ['David', 'Richard', 'Veronika'];

const shortNames = names.filter(function (name) {
    return name.length < 6;
});
console.log(shortNames)


/* Usando filtro ()
  *
  * Usando la matriz musicData y el filtro ():
  * - Devuelve solo los objetos del álbum donde el nombre del álbum es
  * 10 caracteres de largo, 25 caracteres de largo o cualquier punto intermedio
  * - Almacene los datos devueltos en una nueva variable de "resultados"
  *
  * Nota:
  * - No elimine la variable musicData
  * - No altere ninguno de los contenidos de musicData
  */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    {
        artist: 'Original Broadway Cast Recording',
        name: 'Hamilton: An American Musical', sales: 820000
    },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter(function (item) {
    return ((item.name.length >= 10) && (item.name.length <= 25));
});
console.log(results);