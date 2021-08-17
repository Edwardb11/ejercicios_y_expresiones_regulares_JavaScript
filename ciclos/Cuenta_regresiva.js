//La cuenta regresiva de la NASA para el lanzamiento incluye puntos de control donde los ingenieros de la NASA completan ciertas tareas técnicas. Durante el último minuto, la NASA tiene 6 tareas para completar:

//El orbitador se transfiere de tierra a energía interna (T-50 segundos)
//El secuenciador de lanzamiento desde tierra está listo para el inicio de secuencia automática (T-31 segundos)
//Activar el sistema de supresión de sonido de la plataforma de lanzamiento (T-16 segundos)
//Activar el sistema de quemado de hidrógeno del motor principal (T-10 segundos)
//Arranque del motor principal (T-6 segundos)
//¡Encendido y despegue del cohete sólido! (T-0 segundos)
//NOTA: "T-50 segundos" se lee como "T-menos 50 segundos".

//Direcciones:
//Escriba un ciclo while que cuente hacia atrás desde 60 segundos y:

//Si se está completando una tarea, imprime la tarea
//Si no se completa ninguna tarea, imprime el tiempo como T-x segundos
//Utilice las descripciones de tareas y tiempos descritas anteriormente.

// Tomemos una variable de iteración, que representa el tiempo restante en segundos
n = 60

// Bucle while con condición de parada
while (n >= 0) {
    if (n === 50) {
        console.log("Orbiter se transfiere de tierra a energía interna");
    }
    else if (n === 31) {
        console.log("El secuenciador de lanzamiento terrestre está listo para el inicio automático de la secuencia");
    }
    else if (n === 16) {
        console.log("Activar el sistema de supresión de sonido de la plataforma de lanzamiento");
    }
    else if (n === 10) {
        console.log("Activar el sistema de combustión de hidrógeno del motor principal");
    }
    else if (n === 6) {
        console.log("Arranque del motor principal");
    }
    else if (n === 0) {
        console.log("¡Encendido y despegue del propulsor de cohete sólido!");
    }
    else {
        console.log("T -" + n + "segundos");
    }

    // Nunca olvides disminuir / incrementar la variable de iteración en un ciclo while
    // De lo contrario, el bucle ejecutará iteraciones infinitas
    n = n - 1;
}