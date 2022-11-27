const express = require('express');
const app = express();
const port = 3000;

app.get('/user/:userId([0-9]+)',
    (req, res, next) => {
        const { userId } = req.params;
        if (userId == 0) {
            console.log('0 is not allowed');
            return next('route');
        }
        next();
    },
    (req, res, next) => {
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




