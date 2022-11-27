const express = require('express');
const debug = require('debug')('app');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<p>Homepage</p>');
    debug('/');
});

app.get('/hello', (req, res) => {
    res.send('<p>Hello World!</p>');
    debug('/hello');
});

app.listen(port, ()=>{debug(`port = ${port}`)});


