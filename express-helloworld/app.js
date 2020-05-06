var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

<<<<<<< HEAD
app.get('/mars', function(req, res) {
=======
app.get('/mars', function (req, res) {
>>>>>>> 08b9b0a4d001131ce98e9a54ecf920f8e69c8b5a
  res.send('Hello Mars!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

