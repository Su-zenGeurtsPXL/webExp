const dotenv=require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION ;
const DB_CONNECTION_OPTIONS = JSON.parse(process.env.DATABASE_CONNECTION_OPTIONS);
async function run() {
    try{
        await mongoose.connect(DATABASE_CONNECTION, DB_CONNECTION_OPTIONS);
        const personSchema = new mongoose.Schema({
            name: String, 
            age: Number
        }, { collection: "persons" });
        const Person = mongoose.model("Person", personSchema);
        let result = await Person.aggregate( [{$group:{_id:"$name", number: {$sum:1}}}] );
        console.log(result);
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


