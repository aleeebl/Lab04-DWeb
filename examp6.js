const event = require('events');
class Dog extends event.EventEmitter{}
const dog = new Dog();

dog.on('bark',() =>{
    console.log('un perro ladrando');
});

dog.emit('bark');