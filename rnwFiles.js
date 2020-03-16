// reading and writing files on a computer
const fs = require('fs');

// synchronous methods of reading and writing files.
let readMe= fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readMe);

// asynchronous methods of reading and writing files.
fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
})

// the difference between sunchronous method and asynchronous method is that while fs module is reading the file in synchronous it blocks the program
// from running with the codes after its block , while the reverse is the case with asynchronous
