const express = require('express');
const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.send(`id = ${id}`);
});

app.get('/writer/:writerId([0-9]+)/book/:bookId([0-9]+)', (req, res) => {
    const { writerId, bookId} = req.params;
    res.send(`writer ${writerId} book ${bookId}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
