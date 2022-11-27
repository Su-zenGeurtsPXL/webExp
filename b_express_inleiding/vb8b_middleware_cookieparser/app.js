const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get('/placecookie', (req, res) => {
    res.cookie('language', 'nl ', {
        expires: new Date(Date.now() + 8 * 3600000)
    })
        .cookie('name', 'tim')
        .redirect('/done')
});

app.get('/done', (req, res) => {
    const { language, name } = req.cookies;
    res.send(`language=${language} name=${name}`);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


