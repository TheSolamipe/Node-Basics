// node js contains some in-built modules that we can fetch just like our custom modules
const events = require('events') //fetching the event module
const util = require('util') //fetching the event module

let Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter); //util inheriting the Person object and event emitter from event modules

// creating various persons
let james = new Person('james');
let beauty = new Person('beauty');
let raul = new Person('raul');
let people = [james, beauty, raul];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(`${person.name} said: ${mssg}`);
  });
})

james.emit('speak', 'hey guys!');
raul.emit('speak', 'hi james!');
james.emit('speak', 'my guy');
beauty.emit('speak', 'james my love');
james.emit('speak', 'how you doing baby girl @beauty');
beauty.emit('speak', 'been a while @james');
raul.emit('speak', 'my guy, how you dey? @james');
raul.emit('speak', 'keep baby boying us all ooh @beauty');
