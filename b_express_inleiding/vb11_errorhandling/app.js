const express = require('express');
const createError = require('http-errors');

const app = express();
const port = 3000;
const userRouter = require('./routes/user');

app.use(express.json());

app.use((err, req, res, next) => {
    return next(createError(400, 'Invalid json'));
});

app.use('/user', userRouter);

app.use((req, res, next) => {
    if (!req.route) {
        return next(createError(404, 'Route not found'));
    }
    next();
});

app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'Something went wrong'
    console.log(err.status, err.message);
    return res.status(err.status).json({'error': err.message});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


