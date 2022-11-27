const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
    res.send('route /user');
});

app.get('/a+(cd)?e*', function (req, res) {
    res.send('route /, 1 of meerdere keer a, al dan niet cd, e, 0 1 of meerdere symbolen');
})

app.get(/^\/[a-z]+[0-9]?$/, function (req, res) {
    res.send('/, 1 of meerdere letters, al dan niet een getal');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


