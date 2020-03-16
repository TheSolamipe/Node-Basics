module.exports.adder = function(a,b){
  return `the sum of the two numbers is ${a+b}`;
}

module.exports.pie = 3.142;

module.exports.counter = function(arr){
  return `There are ${arr.length} elements in the array.`
}

// callback function
let time= 0;
let timer = setInterval(function(){
  time += 2;
    console.log(`there is a delay of ${time} seconds`)
  if(time > 3){
    clearInterval(timer);
  }
}, 2000);

module.exports.timer = timer;
// module.exports.adder = adder;
// module.exports.pie = pie;
// module.exports.counter = counter;
