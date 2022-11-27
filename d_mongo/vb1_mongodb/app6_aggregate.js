const dotenv=require("dotenv");
dotenv.config();
const {MongoClient, ObjectId} = require("mongodb");
const PORT = process.env.PORT;
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION ;

const client = new MongoClient(DATABASE_CONNECTION);

async function run() {
    try {
        await client.connect();
        const database = client.db();
        let tasks = await database.collection("tasks").aggregate([
            { $match: {todo:"clean room"} },
            { $lookup: { 
                        from: "persons", 
                        localField: "personId",
                        foreignField: "_id",
                        as: "person"
                    }
            },
            { $unwind:"$person" }, 
            { $project: {todo:1, time:1, person:1} } 
        ]);
        console.log(await tasks.toArray());
    } finally {
        await client.close();
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




