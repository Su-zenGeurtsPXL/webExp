const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<p>Homepage</p>');
});

app.get('/hello', (req, res) => {
    res.send('<p>Hello World!</p>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


