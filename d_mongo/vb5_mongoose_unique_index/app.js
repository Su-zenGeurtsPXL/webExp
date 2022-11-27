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
            name: { type: String, index: { unique: true } },
            age: Number
        }, { collection: "persons" });
        const Person = mongoose.model("Person", personSchema);
        let person = new Person({ name: "sofie", age: 7 });
        let person2 = new Person({ name: "sofie", age: 7 });
        let result = await person.save();
        let result2 = await person2.save();
        console.log(result);
        console.log(result2);
    } finally {
        await mongoose.connection.close();
    }
}

function cleanup (event) { 
    console.log("Bye!");
    mongoose.connection.close(); 
    process.exit(); 
}

run().catch((err) => {console.log(err.stack);});    
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);


