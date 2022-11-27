const express = require('express');
const app = express();
const port = 3000;

app.get('*', (req, res, next) => {
    console.log('start : *');
    next();
});

app.get('/user/:userId([0-9]+)', (req, res, next) => {
    const { userId } = req.params;
    console.log(`user ${userId}`);
    res.send(`user ${userId} `);
    next();
});

app.get('*', (req, res, next) => {
    console.log('stop : *');
    next();
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});




