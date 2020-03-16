// using the http module to create a server
// pipes saves us from the stress of manually listening to the receival of data in order to trigger a function to write the read stream of data,
// thereby saving us time
const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req,res){
  if(req.url === '/home' || req.url === '/'){ //routing
    res.writeHead(200,{'Content-Type': 'text/html'});
    let mypiped = fs.createReadStream(__dirname + '/index.html', 'utf8');
    mypiped.pipe(res);
  } else if(req.url === '/contact'){ //routing
    res.writeHead(200,{'Content-Type': 'text/html'});
    let mypiped = fs.createReadStream(__dirname + '/contact.html', 'utf8');
    mypiped.pipe(res);
  } else {
    res.end('Hey guys, i am off the home page');
  }
});

server.listen(3003, '127.0.0.1');
console.log('yay G, im listening to port 3003');
