
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/HW1.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/HW2.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/HW3.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/backlink.html'));
});

var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});
