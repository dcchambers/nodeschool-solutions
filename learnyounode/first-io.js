var fs = require('fs');
var filePath = process.argv[2];
var fileContents = fs.readFileSync(filePath);
var numLines = fileContents.toString().split('\n').length
console.log(numLines - 1) //no \n at the end, we overcounted by 1.