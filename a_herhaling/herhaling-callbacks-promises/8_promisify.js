const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile);           // <= maak van een callback-functie een promise
readFile('files/a.txt')
    .then((result) => { console.log(result.toString()) })
    .catch((error) => { console.log('rejected: ', error.message); });