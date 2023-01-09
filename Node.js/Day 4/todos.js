const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { type } = require("os");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.post("/register", (req, res) => {
    let user = req.body;
    //validation
    if (!user.username) {
        res.status(422).send(`error: username is required`);
    } else if (!user.password) {
        res.status(422).send(`error: password is required`);
    } else if (!user.fName) {
        res.status(422).send(`error: first name is required`);
    } else {
        let users = fs.readFileSync("users.json", "utf-8");
        if (users.length === 0) {
            users = [];
        } else {
            users = JSON.parse(users);
        }

        users.push(user);
        fs.writeFileSync("users.json", JSON.stringify(users, null, 4), "utf-8");
        res.send(`User ${req.body.fName} was registered successfully`);
    }
});

app.post("/login", (req, res) => {
    let users = fs.readFileSync("users.json", "utf-8");
    if (users.length === 0) {
        res.status(401).send("Invalid Credentials");
    } else {
        users = JSON.parse(users);
        let loggingUser = req.body;
        let user = users.find((user) => {
            if (user.username === loggingUser.username && user.password === loggingUser.password) {
                return user;
            }
        });
        if (user === undefined) {
            res.status(401).send("Invalid Credentials");
        } else {
            res.send(`Logged in successfully, welcome ${user.fName}`);
        }
    }
});

let todos = ["study nodejs", "clean the room", "cook dinner", "prepare for interviews"];

app.get("/todos", (req, res) => {
    let todosTitle = [];
    todos.forEach((todo) => {
        todosTitle.push(todo.title);
    });
    res.send(todosTitle);
});

app.post("/todos", (req, res) => {
    let todo = req.body;
    todos.push(todo);
    res.send("to-do created successfully");
});

app.get("/todos/:id", (req, res) => {
    let id = req.params.id;
    res.send(todos[id - 1]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
