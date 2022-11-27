const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
        title: {
                type: String,
                minLength: 3,
                trim:true,
                lowercase:true,
                validate: {
                    validator: (value) => /^[a-z ]+$/.test(value),
                    message: (props) => `${props.value} is not a valid title`
                    },
                required: [true, "Title is required"]
        }, 
        author : { type: mongoose.Schema.Types.ObjectId, ref: "Author" }
    },
    { collection: "books" }
);

module.exports = mongoose.model("Book", bookSchema );



