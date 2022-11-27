const express = require("express");
const dotenv=require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const path = require("path");
const mongoose = require("mongoose");
const $console = require("Console");
const app = express();
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION ;
const DB_CONNECTION_OPTIONS = JSON.parse(process.env.DATABASE_CONNECTION_OPTIONS);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({extended: true}));
app.use("/", indexRouter);
app.use("/users", userRouter);


mongoose.connect(DATABASE_CONNECTION, DB_CONNECTION_OPTIONS).catch((error)=> {
    $console.error(error.message);
    cleanup(); 
});

app.listen(PORT, () => {
    $console.log((new Date()).toUTCString(), `\tApp listening at port ${PORT}.` );
});

mongoose.connection.on("disconnected", function(){
    $console.error((new Date()).toUTCString(), "\tDisconnected from database.");
});
mongoose.connection.on("connected", function(){
    $console.log((new Date()).toUTCString(), "\tConnected to database.");
});


process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

function cleanup (event) {
    $console.log((new Date()).toUTCString(), "\nBye!");
    mongoose.connection.close(); 
    process.exit(); 
}



