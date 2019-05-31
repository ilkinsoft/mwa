const fs = require('fs');
var path = require("path");

process.on('message', (fileName) => {

    var readable = fs.createReadStream(path.join(__dirname, fileName), 'utf8');

    readable.on('data', function (chunk) {

        process.send(chunk);
        process.send('ex')
    })
})