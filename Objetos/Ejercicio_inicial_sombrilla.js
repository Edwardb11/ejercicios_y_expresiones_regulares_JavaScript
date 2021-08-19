var sombrilla = {
    color: "Rojo",
    Esta_abierta: true,
    abrir: function () { //este es un metodo para ver si esta bierta la sombrilla
        if (sombrilla.Esta_abierta === true) {
            return "La Sombrilla esta abierta";
        }
        else {
            // sombrilla.Esta_abierta = true;
            return "Edward la sombrilla esta cerrada"
        }
    },
    cerrar: function () { //metodo para cerrar la sombrilla
        if (sombrilla.Esta_abierta === true) {
            sombrilla.Esta_abierta = false;
            return "Cerrando la sombrilla "
        }
    }
}

console.log(sombrilla.abrir());
//console.log(sombrilla.cerrar());
