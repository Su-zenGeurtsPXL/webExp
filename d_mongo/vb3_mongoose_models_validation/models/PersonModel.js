const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
        name: {
                type: String,
                minLength: 2,
                trim: true,
                lowercase: true,
                validate: {
                    validator: function(value) {
                        return /^[a-z]+$/.test(value);
                        },
                    message: (props) => `${props.value} is not a valid name!`
                    },
                required: [true, "Name is required"]
        }, 
        age: {
                type: Number,
                get: v => Math.floor(v),
                set: v => Math.floor(v),
                min: [0, "Minimum age is 0"],
                max: [150, "Maximum age is 150"],
                required: [true, "Age is required"]
        },
        gender:{
                type: String,
                enum  : ["m", "f", "x"], 
                default: "m"
        }
    }, 
    { collection: "persons" }
);

module.exports = mongoose.model("Person", personSchema );




