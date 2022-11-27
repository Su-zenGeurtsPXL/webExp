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
        let person = new Person({ name: "Leen", age: 17 });
        let result = await person.save();
        console.log(result);
    } finally {
        await mongoose.connection.close();
    }
}

run().catch((err) => {console.log(err.stack);});    

const cleanup = (event) => { 
    console.log("Bye!");
    mongoose.connection.close(); 
    process.exit(); 
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

