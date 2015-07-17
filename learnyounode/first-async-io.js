var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, function(err, contents) {
    var numLines = contents.toString().split('\n').length;
    console.log(numLines - 1); //we overcounted by 1 again.
});