
// npm i simple-node-logger

const log = require('simple-node-logger').createSimpleLogger('project.log');
log.info('subscription accepted at ', new Date().toJSON());

// npm i validator

const validator = require('validator');
console.log(validator.isEmail('student@pxl.be')); // true

// npm i chalk

const chalk = require('chalk');
console.log(chalk.blue('Success!'));
console.log(chalk.blue.inverse('Your notes:'))
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));


// npm i yargs
// Execution: node .\app.js add --first=1 --second=2

const yargs = require('yargs');
yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        first: {
            describe: 'First Number',
            demandOption: true, // Required
            type: 'number'
        },
        second: {
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        console.log("Result:", parseInt(argv.first) + parseInt(argv.second));
    }
});
yargs.parse();