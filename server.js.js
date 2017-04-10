var http = require('http')

var port1 = 7000
var port2 = 7500

function handleRequest1(request, response) {


  response.end('you are awesome!');
}

function handleRequest2(request, response) {


  response.end('You are not awesome');
}




var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


server1.listen(port1, function() {

  console.log("First Server listening on: http://localhost:%s", port1);

});

server2.listen(port2, function() {

  console.log("Second Server listening on: http://localhost:%s", port2);

});
