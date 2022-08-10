const fs = require('fs');
fs.readFile('D:\JS Course\JS_related-work\NodeJS\ReqRes\message.txt', 'utf-8', function (err, data) {
  console.log(data);
});
