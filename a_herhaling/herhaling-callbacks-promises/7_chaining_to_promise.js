function double(number) {                                   // <== Async actie om te verdubbelen
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number != 'number' || isNaN(number)) {
                return reject(`${number} is not a number`);
            }

            let result = 2 * number;

            if (result == Infinity) {
                return reject(`${number}! is Infinity`);
            }

            return resolve(result);

        }, Math.floor(Math.random() * 1000));
    });
    return promise;
}

factorial(1)
    .then((result) => double(result))                           // <== Chained aan een ASYNC actie (verdubbelen)
    .then((result) => { console.log('resolved: ', result); })
    .catch((error) => { console.log('rejected: ', error); });











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