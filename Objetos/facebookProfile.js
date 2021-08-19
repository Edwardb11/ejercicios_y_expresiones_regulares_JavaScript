// crea un objeto llamado facebookProfile. El objeto debe tener 3 propiedades:

// tu nombre
// la cantidad de amigos que tienes, y
// una serie de mensajes que ha publicado (como cadenas)
// El objeto también debe tener 4 métodos:

// postMessage (mensaje): agrega una nueva cadena de mensaje a la matriz
// deleteMessage (índice): elimina el mensaje correspondiente al índice proporcionado
// addFriend (): aumenta el número de amigos en 1
// removeFriend (): disminuye el número de amigos en 1

/*
  * Prueba de programación: Amigos de Facebook (7-5)
  * /

/ *
  * REQUISITOS DEL EXAMEN
  * - Su código debe tener un objeto `facebookProfile`
  * - El objeto `facebookProfile` debe tener la propiedad` name` (cadena), `amigos` (número) y` messages` (matriz de cadenas)
  * - Tu objeto `facebookProfile` debe tener los métodos` postMessage () `,` deleteMessage () `,` addFriend () `y` removeFriend () `
  * - Implemente con cuidado la funcionalidad deseada de cada método, como se describe arriba
  */


// PROPINA -
// En una matriz,
// - la adición al final se realiza usando el método push ()
// - la adición en un índice específico se realiza usando el método splice ()
// - la eliminación desde el principio se realiza mediante el método pop ()
// - la eliminación de un índice específico se realiza mediante el método splice ()

// your code goes here
var facebookProfile = {
    name: 'Edward',
    friends: 20,
    messages: ['message1', 'message2', 'message3'],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function () {
        facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend: function () {
        if (facebookProfile.friends > 0)
            facebookProfile.friends = facebookProfile.friends - 1;
    }

}