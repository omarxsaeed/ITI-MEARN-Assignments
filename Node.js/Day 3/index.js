const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/welcome/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    if (req.query.name) {
        res.send(`Welcome ${req.query.name}`);
    }
});

app.get("/welcome/:name", (req, res) => {
    res.send(`Welcome 2 ${req.params.name}`);
});

app.post("/login", (req, res) => {
    res.send(req.body);
});

let products = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "iPhone 14 Pro",
    "Samsung Galaxy S22",
    "MacBook M1",
    "Asus Zenbook",
    "RTX 4090",
];

app.get("/products/:id", (req, res) => {
    let id = req.params.id;
    if (id > 9) {
        res.send(products[id - 1]);
    } else {
        res.send("id must be a number of 2 digits.'");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:3000/`);
});

/*
What's a middleware?
It's a function that executes during the lifecycle of a request to the Express server.
it also has access to the HTTP request and response for each route it’s attached to.
We use middlewares  can process request objects multiple times before the server works for that request. 
Middleware can be used to add logging and authentication functionality
It's called in between the apps request-> response cycle when are the perfect place to modify
the req and res objects with relevant information
*/
