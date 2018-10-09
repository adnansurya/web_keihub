const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));

app.get('/', function(request, response)  {
  response.render('index');
});

app.get('/new_article', function(request, response)  {
  response.render('new_article')
});

app.get('/authentification', function(request, response)  {
  response.render('authentification')
});

app.get('/index', function(request, response)  {
  response.render('index')
});

app.get('/profile_edit', function(request, response)  {
  response.render('profile_edit')
});

app.get('/profile_view', function(request, response)  {
  response.render('profile_view')
});

exports.apps = functions.https.onRequest(app);
