const dotenv=require("dotenv");
dotenv.config();

const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION ;
const DB_CONNECTION_OPTIONS = JSON.parse(process.env.DATABASE_CONNECTION_OPTIONS);

const User = require("./models/userModel.js");
const mongoose = require("mongoose");
const $console = require("Console");

mongoose.connect(DATABASE_CONNECTION, DB_CONNECTION_OPTIONS).catch((error)=> {
    $console.error(error.message);
    cleanup(); 
});

async function run() {
    try{
        await User.collection.drop();
        let user1 = new User({name: "tim"});
        await user1.save();
        let user2 = new User({name: "sofie"});
        await user2.save();
        users = await User.find({});
        console.log("users");
        console.log(users);
    } catch(error){
        console.log(error);
    } finally {
        cleanup();
    }
}

run().catch((err) => {console.log(err.stack);});    
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

function cleanup (event) {
    $console.log("\nBye!");
    mongoose.connection.close(); 
    process.exit(); 
}

