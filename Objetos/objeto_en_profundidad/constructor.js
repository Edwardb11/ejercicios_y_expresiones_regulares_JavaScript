
// Tenga en cuenta que aunque el nombre de la función comienza con mayúscula, eso no la convierte automáticamente en
//  una función de constructor (es decir, aunque los desarrolladores nombran funciones de constructor en CamelCase
//      por convención, el lenguaje no lo impone). Lo que hace que SoftwareDeveloper()una función constructora sea:

// El uso del newoperador para invocar la función
function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
  }

  let developer = new SoftwareDeveloper();

//   Crear varios objetos
// Es más: ¡incluso podemos usar la misma función constructora para crear tantos objetos como queramos!

// Invoquemos el mismo SoftwareDeveloper()constructor dos veces más para instanciar dos objetos adicionales:
//  engineery programmer.

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();

console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }


// Las funciones de constructor pueden tener parámetros
// Al igual que las funciones regulares, una de las ventajas de utilizar funciones constructoras es que también
//  pueden aceptar argumentos. Actualicemos el constructor anterior para que acepte un solo argumento y le
//   asignemos la namepropiedad:

function SoftwareDeveloper(name) {
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}
// En la SoftwareDeveloper()función actualizada , cualquier valor que se pase a la función será el valor de la
//  namepropiedad del objeto . Vamos a ver:

let instructor = new SoftwareDeveloper('Andrew');

console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }

let teacher = new SoftwareDeveloper('Richard');

console.log(teacher);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Richard' }



/*

Ahora es tu turno de crear una función constructora. Declarar a
Función constructora `Sandwich` que toma tres parámetros:

1. `bread` (cadena): el tipo de pan para el sándwich (p. Ej.," Trigo ")
2. `meat` (matriz): las carnes para poner en el sándwich
   (por ejemplo, `[]` para un sándwich vegetariano!)
3. `verduras` (matriz): las verduras que se incluirán en el sándwich

*/
function Sandwich(bread,meat,vegetables){
    this.bread = bread;
    this.meat = meat;
    this.vegetables = vegetables;
  }



//Considere los siguientes constructores:

  function Finch(name) {
    this.kingdom = 'Animalia';
    this.name = name;
  }
  
  function Sparrow(name) {
    this.kingdom = 'Animalia';
    this.name = name;
    
  }

const atticus = new Finch('Atticus');
// const jack = new Sparrow('Jack');

// ¿Cuál es el resultado cuando atticus instanceof Sparrow;se ejecuta?

// falsees regresado. No solo Sparrowno es la atticusfunción constructora
//  del Sparrowobjeto, el objeto no se encuentra en ninguna parte de la atticuscadena de prototipos.