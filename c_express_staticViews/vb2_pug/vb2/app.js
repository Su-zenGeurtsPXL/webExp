const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get('/', (req,res) => {
    res.render("index", { 
            title: "Family members", 
            users: [{id:1, name:'pauline'}, {id:2, name:'sofie'}, {id:3, name:'tim'}],
            image: "/images/pxl.png"
        } );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



