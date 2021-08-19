var sombrilla = {
    color: "Rojo",
    Esta_abierta: false,
    abierta: function () { //este es un metodo para ver si esta bierta la sombrilla
        if (sombrilla.Esta_abierta === true) {
            return "La Sombrilla esta abierta";
        }
        else {
            // sombrilla.Esta_abierta = true;
            return "Edward la sombrilla esta cerrada"
        }
    }
}

console.log(sombrilla.abierta());