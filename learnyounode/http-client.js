//http-client.js

var http = require('http');
var url = process.argv[2];

//function callback (response) { }
//response.on('data', function (data) { })

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
})
