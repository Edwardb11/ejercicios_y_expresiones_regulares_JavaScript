/*
  * Prueba de programación: otro tipo de bucle (6-8)
  * REQUISITOS DEL EXAMEN
  * Utilice la variable `test` existente y escriba un bucle` forEach`
  * que suma 100 a cada número divisible por 3.
  *
  * Cosas a tener en cuenta:
  * - Dentro del bucle, debe usar una declaración `if` para verificar que el código sea divisible por 3
  * - Dentro del bucle, puede actualizar un elemento ÚNICAMENTE usando el nombre de matriz [índice]
  * - Fuera del ciclo, puede usar `console.log` para verificar la variable` test`
  */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Puedes probar tu código con una matriz más pequeña primero
// var prueba = [12, 29, 11, 3];

// Write your code here
test.forEach(function (item, index) {
    if (item % 3 === 0) {
        test[index] = test[index] + 100;
    }
    else
        console.log("Elemento " + item + " no es divisible por tres 3");
});
console.log(test);
