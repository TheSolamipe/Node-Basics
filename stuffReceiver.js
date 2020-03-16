// fetching our custom module stuff.
let stuff = require('./stuff');

// function expression
let sayTime = function(call){
  call  ;
}


sayTime(stuff.timer)
console.log(stuff.counter(['sam','tom','cat','pen']));
console.log(stuff.adder(12,stuff.pie));
