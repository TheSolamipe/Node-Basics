// /////////////////////////////////////////////

const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type': 'application/json'});
  let myObj= {
    name: 'Ryu',
    job: 'Ninja Programmer',
    age: 28
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3002, '127.0.0.1');
console.log('yay G, im listening to port 3002');
