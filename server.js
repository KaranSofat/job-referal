
var debug = require('debug')('mean-app:server');
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var server = http.createServer(app);
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

//Put your angular dist folder here
app.use(express.static(path.join(__dirname, 'dist/angular7demo')));

function normalizePort(val) {
   var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
   }

   return false;
}
var port = normalizePort(process.env.PORT || '5555');
app.set('port', port);
 app.get('/testapi', function response(req, res) {

  res.send({"test":"test"})
 }) 
 app.get('*', function response(req, res) {
  
    res.sendFile(path.join(__dirname, 'dist/angular7demo/index.html'));
  });

server.listen(port);
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  console.log('Listening on ' + port);
}