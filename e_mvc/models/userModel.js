const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            minLength:2,
            maxLength:20,
            validate: {
                validator: function(value) {
                    return /^[a-zA-Z]+$/.test(value);
                },
                message: (props) => `${props.value} is not a valid name.`
            }
        }
    },
    { collection: "users" }
);

module.exports = mongoose.model("User", userSchema );

