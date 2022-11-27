//
// Promises: i 'promise' i will resolve or reject: something will happen :-)
//
/*
let promise = new Promise((resolve, reject) => {
    // do something asynchronous
    // if success
    // resolve(somevalue);
    // otherwise
    // reject(somevalue);
});

// Creation of the a promise (example)
promise
    .then(
        (result) => { console.log(result); }
    )
    .catch(
        (error) => { console.log(error); }
    )
*/

//
// function that uses the promise
//
function factorial(number) {
    let promise = new Promise((resolve, reject) => {

        if(typeof number != 'number' || isNaN(number)){
            throw new Error (`${number} is not a number`);      // Gebruik NOOIT throw in een async deel van de promise: daar dien je 'reject' te gebruiken
        }                                                       // Dit stuk code is NIET asynchroon, de timeout hierna WEL

        setTimeout(() => {
            if (typeof number != 'number' || isNaN(number)) {
                return reject(`${number} is not a number`);     // If number is not numeric: REJECT
            }
            let result = 1;
            for (let i = 1; i <= number; i++) {
                result = result * i;
                if (result == Infinity) {
                    break;
                }
            }
            if (result == Infinity) {
                return reject(`${number}! is Infinity`);        // If result is Infinity: REJECT
            }
            return resolve(result);                             // Resolve the promise
        }, Math.floor(Math.random() * 1000));
    });
    return promise;                                             // Returning the promise will happen before it get resolved (reference is passed to caller)
}
factorial("A")
    .then((result) => { console.log('resolved: ', result); })
    .catch((error) => { console.log('rejected: ', error); });