const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: { type: String, unique: true, required: [true, "Username is required"] },
        password: { type: String, required: [true, "Password is required"] },
        fName: {
            type: String,
            required: [true, "First name is required"],
            min: [3, "First name is too short"],
            max: [15, "First name is too long"],
        },
        age: { type: Number, min: [13, "You have to be at least 13 years old"] },
    },
    { strict: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
