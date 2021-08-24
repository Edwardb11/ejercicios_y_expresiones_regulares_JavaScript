const button = document.getElementById('button');

// button.js
// agregaremos un detector de eventos button y escucharemos un 'click'evento. Luego, pasaremos un IIFE como segundo argumento:
button.addEventListener('click', (function() {
    let count = 0;
  
    return function() {
      count += 1;
  
      if (count === 2) {
        alert('Has presionado dos veces');
        count = 0;
      }
    };
  })());