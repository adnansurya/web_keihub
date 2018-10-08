const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));

app.get('/', function(request, response)  {
  response.render('index');
});

app.get('/login', function(request, response)  {
  response.render('login');
});

app.get('/temp', function(request, response)  {
  response.render('template')
});

app.get('/author', function(request, response)  {
  response.render('author')
});

app.get('/loginpage', function(request, response)  {
  response.render('loginpage')
});

app.get('/indexpage', function(request, response)  {
  response.render('indexpage')
});

exports.apps = functions.https.onRequest(app);
