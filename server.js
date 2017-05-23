'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
//
// app.get('/about', function(request,response){
//   response.sendFile('public/about.html', {root: '.'});
// })
//
// app.post('/projects', bodyParser, function(request, response) {
//   console.log(request.body);
//   response.send('Record posted to server!!');
// })

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {
  console.log('Now on localhost' + PORT);
});
