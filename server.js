var express = require('express');
var app = express();

var docroot = __dirname + '/www';

//serve static files as is
app.use(express.static(docroot));

//serve index.html for all other requests
app.get('*', function(req, res) {
  res.sendfile(docroot + '/index.html');
});

//setup the server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});