const Todo = require("../Models/todos");

async function createTodo(data) {
    let res = await Todo.create(data);
    return res;
}

async function getTodoList(userId) {
    let res = await Todo.find({ userId: userId });
    console.log(`Todo is ${res}`);
    return res;
}

async function updateTodo(id, data) {
    let res = await Todo.findByIdAndUpdate(id, data);
    console.log(res);
    return res;
}

async function deleteTodo(id) {
    let res = await Todo.findByIdAndDelete(id);
    return res;
}

module.exports = { createTodo, getTodoList, updateTodo, deleteTodo };
