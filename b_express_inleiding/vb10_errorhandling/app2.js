const axios = require('axios').default;
const express = require('express');
const util = require('util'); 
const sleep = util.promisify(setTimeout);
const app = express();
const port = 3000;

app.get('/oops1', function(req,res,next){
    setTimeout(() => {
        return next(new Error("oops 1"))
    }, "1000")
});

app.get('/oops2', async function(req,res,next){
    await sleep(1000);
    return next(new Error("oops 2"))
});

app.get('/oops3', function(req,res,next){
    setTimeout(() => {
        throw new Error("oops 3");
    }, "1000")
});

app.get('/oops4', async function(req,res,next){
    setTimeout(() => {
        throw new Error("oops 4");
    }, "1000")
});

app.get('/oops5', async function(req,res,next){
    await sleep(1000);
    throw new Error("oops 5");
});


app.use(function(err, req, res, next){
    res.send(err.message);
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
