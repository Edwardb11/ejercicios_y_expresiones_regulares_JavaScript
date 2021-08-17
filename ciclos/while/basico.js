//Direcciones:
//Escribe un bucle while que:

//Recorre los números del 1 al 20
//Si el número es divisible por 3, escriba "Julia"
//Si el número es divisible por 5, escriba "James"
//Si el número es divisible entre 3 y 5, escriba "JuliaJames"
//Si el número no es divisible por 3 o 5, imprímalo

// ciclo while y condicion
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    } else if (x % 5 === 0) {
        console.log("James");
    } else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1;
}