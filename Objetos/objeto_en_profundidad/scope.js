/*
Declare una función llamada `expandArray ()` que:

* No toma argumentos
* Contiene una única variable local, "myArray", que apunta a [1, 1, 1]
* Devuelve una función anónima que modifica directamente `myArray` por
  agregando otro "1" en él
* La función devuelta luego devuelve el valor de `myArray`

*/
function expandArray(){
    let myArray=[1,1,1];
     return function (){
          myArray.push(1);
          return myArray;
     }
     
 }
 console.log(expandArray);