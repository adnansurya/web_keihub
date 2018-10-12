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

app.get('/read_article', function(request, response)  {
  response.render('read_article')
});

app.get('/about', function(request, response)  {
  response.render('about')
});

app.get('/new_video', function(request, response)  {
  response.render('new_video')
});

app.get('/watch_video', function(request, response)  {
  response.render('watch_video')
});

app.get('/category', function(request, response)  {
  response.render('category')
});

exports.apps = functions.https.onRequest(app);
