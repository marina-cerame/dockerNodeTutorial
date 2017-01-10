var express = require('express');

var port = 8080;

var app = express();

app.get('/', function(req, res){
res.send('hello world!');
});

app.listen(port);

console.log('listening on localhost:8080');
