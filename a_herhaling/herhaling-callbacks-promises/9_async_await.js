const util = require('util')
const sleep = util.promisify(setTimeout);

//
// AWAIT kan enkel in een async functie worden gebruikt (async/await pattern)
//

async function factorial(number) {                                  // <== keyword dat deze functie een async taak uitvoert
    await sleep(Math.floor(Math.random() * 1000));      // <== AWAIT (wacht) op het resultaat

    if (typeof number != 'number' || isNaN(number)) {
        throw new Error(`${number} is not a number`);
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
        if (result == Infinity) {
            break;
        }
    }
    if (result == Infinity) {
        throw new Error(`${number}! is Infinity`);
    }
    return result;
}


factorial(1)
    .then((result) => { console.log('resolved: ', result); })
    .catch((error) => { console.log('rejected: ', error.message); });