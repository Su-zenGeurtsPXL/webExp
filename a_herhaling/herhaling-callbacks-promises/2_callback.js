//
// Async
//

const fs = require('fs');

// Read a file
fs.readFile('./files/a.txt', 'utf8', (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});

// Write to file
fs.writeFile('./files/a.txt', 'Hello World!', 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > ./files/a.txt');
});