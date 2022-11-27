const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

hbs.registerHelper('loud', function (text) {
    return text.toUpperCase()
})

hbs.registerHelper('firstSymbols', function (text, length) {
    return text.substring(0, length)
})

hbs.registerHelper("bold", function(options) {
  return new hbs.SafeString('<div class="bold">' + options.fn(this) + "</div>");
});

hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get('/', (req,res) => {
    res.render("index", { 
            title: "Family members", 
            users: [{id:1, name:'pauline'}, {id:2, name:'sofie'}, {id:3, name:'tim'}],
            image: '/images/pxl.png'
        } );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


