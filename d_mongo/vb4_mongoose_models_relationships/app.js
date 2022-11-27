const dotenv=require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION ;
const DB_CONNECTION_OPTIONS = JSON.parse(process.env.DATABASE_CONNECTION_OPTIONS);

const Author = require("./models/AuthorModel.js");
const Book = require("./models/BookModel.js");


async function run() {
    try{
        await mongoose.connect(DATABASE_CONNECTION, DB_CONNECTION_OPTIONS);
        await Author.deleteMany({});
        await Book.deleteMany({});        
        let author = new Author({ name: "Sofie"});
        await author.save();
        let book1 = new Book({ title: "De wereld van Sofie", author: author._id});
        book1 = await book1.save();
        let book2 = new Book({ title: "Sofie en het geheime paard", author: author._id});
        await book2.save();
        author.books.push(book1._id);
        author.books.push(book2._id);
        await author.save();
        let authors=await Author.find({});
        console.log("authors:");
        console.log(authors);
        let books = await Book.find({});
        console.log("books:");
        console.log(books);
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


