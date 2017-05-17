'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file

// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
// There is also a package here called body-parser, which is required in for use in a new route.
// Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();


const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/new', function(request,response){
  console.log('New html file being loaded');
  response.sendFile('public/new.html', {root: '.'});
})

app.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  console.log('Now on localhost' + PORT);
});
