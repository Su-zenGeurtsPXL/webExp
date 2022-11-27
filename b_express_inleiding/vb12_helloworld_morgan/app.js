const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.send('<p>Homepage</p>');
});

app.get('/hello', (req, res) => {
    res.send('<p>Hello World!</p>');
});

app.listen(port, ()=>{console.log(`port = ${port}`))});


