// importing the express module installed

let express = require('express');
let fs = require('fs');

let app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
  res.writeHead(200, {'content-type':'text/html'});
  let myPipee = fs.createReadStream(__dirname +'/index.html', 'utf8');
  myPipee.pipe(res);
});

app.get('/profile/:name', function(req,res){
  let data = {age:35, job: 'ninja', hobbies: ['eating','fighting', 'sleeping','assimilating']};
  res.render('profile',{person: req.params.name, data: data});
});
app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/contact.html', 'utf8');
});

app.listen(3004);
console.log('Express is in charge of routing');
