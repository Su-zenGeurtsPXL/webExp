const dotenv=require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION ;
const DB_CONNECTION_OPTIONS = JSON.parse(process.env.DATABASE_CONNECTION_OPTIONS);

const Person = require("./models/PersonModel.js");

async function run() {
    try{
        await mongoose.connect(DATABASE_CONNECTION, DB_CONNECTION_OPTIONS);
        let person = new Person({ name: "  LEANDER   ", age: 12.99  });
        let result = await person.save();
        console.log(result);
    } catch(error){
        console.log(error.message);
    } finally {
        await mongoose.connection.close();
    }
}

async function cleanup (event) { 
    console.log("Bye!");
    await client.close(); 
    await process.exit(); 
}

run().catch( (err) => {console.log( err.stack );} );
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);


