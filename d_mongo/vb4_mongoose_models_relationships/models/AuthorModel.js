const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
        name: {
                type: String,
                minLength: 3,
                trim: true,
                lowercase: true,
                validate: {
                    validator: (value) => /^[a-z]+$/.test(value),
                    message: (props) => `${props.value} is not a valid name!`
                    },
                required: [ true, "Name is required" ]
        }, 
        books : [ { type: mongoose.Schema.Types.ObjectId, ref: "Book" } ]
    },
    { collection: "authors" }
);

module.exports = mongoose.model("Author", authorSchema );



