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
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
 });
app.get('/codes', function(req, res){
  res.sendFile(path.join(__dirname, 'views/codes.html'));
 });
app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, 'views/contact.html'));
 });
app.get('/gallery', function(req, res){
  res.sendFile(path.join(__dirname, 'views/gallery.html'));
 });
app.get('/icons', function(req, res){
  res.sendFile(path.join(__dirname, 'views/icons.html'));
 });
app.get('/single', function(req, res){
  res.sendFile(path.join(__dirname, 'views/single.html'));
 });
app.get('/codes2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/codes2.html'));
 });
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port 5000 ',app.get('port'));
 });