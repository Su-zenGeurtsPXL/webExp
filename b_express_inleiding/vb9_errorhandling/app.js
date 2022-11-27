const express = require('express');
const createError = require('http-errors');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('ok');
});

app.use((req, res, next) => {
    if (!req.route) {
        return next(createError(404, 'Route not found'));
    }
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});




