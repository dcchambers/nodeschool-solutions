//http-collect.js

var http = require('http');
var bl = require('bl'); //must 'npm install bl' for this to work.

var url = process.argv[2];
var charString;

http.get(url, function (response) {
  response.pipe(bl(function (err, dataReceived) {
    if (err){
      return console.error(err);
    }
    charString = dataReceived.toString();
    //print num chars
    console.log(charString.length);
    //print string recieved
    console.log(charString);
  }))
})
