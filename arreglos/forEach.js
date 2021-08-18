//Las matrices tienen un conjunto de métodos especiales para ayudarlo a iterar y realizar 
//operaciones en colecciones de datos.

//El método forEach () le ofrece una forma alternativa de iterar sobre una matriz 
//y manipular cada elemento de la matriz con una expresión de función en línea.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function (donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
});

//Puede ver que el método forEach () itera sobre la matriz sin la necesidad 
//de un índice definido explícitamente. En el ejemplo anterior, donut corresponde 
//al elemento de la propia matriz. Esto es diferente de un bucle for o while donde 
//se usa un índice para acceder a cada elemento de la matriz:

for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
    console.log(donuts[i]);
}

//Parámetros
//La función que pasa al método forEach () puede tomar hasta tres parámetros. 
//Estos se denominan elemento, índice y matriz, pero puedes llamarlos como quieras.

//El método forEach () llamará a esta función una vez para cada elemento de la matriz 
//(de ahí el nombre forEach). Cada vez, llamará a la función con diferentes argumentos. 
//El parámetro del elemento obtendrá el valor del elemento de la matriz. El parámetro
// de índice obtendrá el índice del elemento (comenzando con cero). El parámetro de
// matriz obtendrá una referencia a toda la matriz, lo cual es útil si desea modificar 
//los elementos.

words = ["cat", "in", "hat"];
words.forEach(function (word, num, all) {
    console.log("Word " + num + " in " + all.toString() + " is " + word);
});