/*
  * Prueba de programación: Construye un triángulo (5-3)
  * /

/ *
  * REQUISITOS DEL EXAMEN
  * - Su código debe tener una función `buildTriangle ()`
  * - Su función `buildTriangle ()` debe tomar un argumento (o puede decir parámetro)
  * - Tu función `laugh ()` debería construir el triángulo como se describe arriba
  */


// crea una línea de * para una longitud determinada
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(length) {
    //Una cadena equivalente al triángulo
    var triangle = "";

    // Empecemos por la línea superior
    var lineNumber = 1;

    for (lineNumber = 1; lineNumber <= length; lineNumber++) {
        //hacemos la cadena que contenga el triangulo completo
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

//console.log(makeLine(10));
console.log(buildTriangle(10));