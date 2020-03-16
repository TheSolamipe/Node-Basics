const http = require('http');
const fs = require('fs'); /*The file system module*/

let myReadStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received: ');
  myWriteStream.write(chunk);
});
