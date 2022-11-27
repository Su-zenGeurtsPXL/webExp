const async = require('async');

async.waterfall([                   // <= Array van tasks
    function (next) {
        console.log('go to kitchen');
        setTimeout(function () {
            data = 'I went to the kitchen';
            next(null, data);
        }, 1000)
    },
    function (data, next) {
        console.log('get a cup');
        setTimeout(function () {
            data = `${data}, I got a cup`;
            next(null, data);                   // <== Eerste argument = 'error', indien NULL ==> alles OK
        }, 1000)
    },
    /*...*/
    function (data, next) {
        console.log('all done');
        setTimeout(function () {
            data = `${data}, I am done`;
            next(null, data);
        }, 1000)
    }
], function (err, data) {
    if (err) { return console.log(err); } 
    console.log(data);                          // <== main callback (ook errorhandling)
});
