const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));

app.get('/', function(request, response)  {
  response.render('index');
});

app.get('/author', function(request, response)  {
  response.render('author')
});

app.get('/login', function(request, response)  {
  response.render('login')
});

app.get('/index', function(request, response)  {
  response.render('index')
});

app.get('/profile', function(request, response)  {
  response.render('profile')
});

exports.apps = functions.https.onRequest(app);
