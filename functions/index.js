const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
app.get('/timestamp', function(request, response)  {
  response.send(`${Date.now()}`);
});

app.get('/', function(request, response)  {
  response.send('halo');
});

app.get('/temp', function(request, response)  {
  response.render('template')
});

app.get('/nomor/:angka', function(request, response)  {
  response.send("nomornya adalah : " + request.params.angka);
});

app.get('/anu', function(request, response)  {
  response.render('tes');
});

exports.apps = functions.https.onRequest(app);
