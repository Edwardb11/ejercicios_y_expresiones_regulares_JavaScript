function inverso(inversoString) {

    var reversed = " ";
    for (var i = inversoString.length - 1; i >= 0; i--) {
        reversed += inversoString[i];
    }
    return reversed;
}

console.log(inverso("Edward"));