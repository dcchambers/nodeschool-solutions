// filter.js

var fs = require('fs');
var path = require('path');

module.exports = function (directory, filterString, callback) {
  fs.readdir(directory, function (err, fileList) {
    if (err) {
      return callback(err);
    }

    fileList = fileList.filter(function (fileList) {
      return (path.extname(fileList) === '.' + filterString);
    })

    callback(null, fileList);
  })
}
