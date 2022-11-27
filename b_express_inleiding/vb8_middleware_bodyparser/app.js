const express = require('express');

const app = express();
const port = 3000;

const userRouter = require('./routes/user');

app.use(function (req, res, next) {
    console.log("voor bodyparser", req.body);
    next();
});
app.use(express.json());
app.use(function (req, res, next) {
    console.log("na bodyparser", req.body);
    next();
});

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});




