//make-it-modular.js

var myFilter = require('./filter.js');
var directory = process.argv[2];
var filterString = process.argv[3];

myFilter(directory, filterString, function (err, fileList) {
  if (err){
    return console.error('An error occured: ', err);
  }

  fileList.forEach(function (fileList){
    console.log(fileList);
  })
})
