// El IIFE(al ejecutarse añade el primer frame al stack de llamada ??)
(() => {
    // Añadir el frame 
    console.log('03, Holi');
   
    //Agregar el mensaje 
    setTimeout(() => {
        console.log('09, Como estan?');
    });

    // Agregar un mensaje adicional
    setTimeout(() => {
        console.log('22, Todos!!');
    }, 0);

    //Agregar un frame adicional
    console.log('31, mensaje adicional');
    
    //Agregar un frame adicional
    console.log('04, ¿Se acerto con el orden de la salida?');

})();
