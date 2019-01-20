var app = require('./app.js');
var debug = require('debug')('mean-app:server');
var http = require('http');
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

var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  console.log('Listening on ' + port);
}