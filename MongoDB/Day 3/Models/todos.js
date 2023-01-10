const mongoose = require("mongoose");
const { schema } = require("./users");

const todoSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId },
    title: {
        type: String,
        required: [true, "Title is required"],
        min: [5, "Title is too short"],
        max: [15, "Title is too long"],
    },
    status: { type: String, default: "to-do" },
    tags: { type: [String], max: [10, "Max length for a tag is 10 characters"] },
    createdAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model("todos", todoSchema);
module.exports = Todo;
