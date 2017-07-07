//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'view/index.html'));
});
app.get('/ass3', function(req, res){
  res.sendFile(path.join(__dirname, 'view/ass3.html'));
});
app.get('/part1', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'view/part1.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});