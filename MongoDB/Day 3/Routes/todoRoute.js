const express = require("express");
const route = express.Router();
const todoController = require("../Controllers/todoController");

route.get("/:userId", async (req, res) => {
    let userId = req.params.userId;
    let todos = await todoController.getTodoList(userId);
    res.send(todos);
});

route.post("/", async (req, res) => {
    let todoData = req.body;
    let todo = await todoController.createTodo(todoData);
    res.send(todo);
});

route.patch("/:id", async (req, res) => {
    let todoId = req.params.id;
    let todoData = req.body;
    let updatedTodo = await todoController.updateTodo(todoId, todoData);
    res.send(updatedTodo);
});

route.delete("/:id", async (req, res) => {
    let todoId = req.params.id;
    let deletedTodo = await todoController.deleteTodo(todoId);
    res.send(deletedTodo);
});

module.exports = route;
