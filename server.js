
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/search_engine', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HW1.html'));
});

app.get('/SEO_vs_SEM', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HW2.html'));
});

app.get('/ON_page_vs_OFF_page', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HW3.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, 'views/contact.html'));
});

app.get('/backlink', function(req, res){
  res.sendFile(path.join(__dirname, 'views/backlink.html'));
});

app.get('/resp', function(req, res){
  res.sendFile(path.join(__dirname, 'views/resp.html'));
});

var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});
