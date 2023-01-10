const express = require("express");
const bcrypt = require("bcrypt");
const route = express.Router();
const userController = require("../Controllers/UserController");

route.get("/", async (req, res) => {
    let users = await userController.getAllUsers();
    res.send(users);
});

route.delete("/", async (req, res) => {
    let deleteRes = await userController.deleteAllUsers();
    res.send(deleteRes);
});

route.patch("/", async (req, res) => {
    let userData = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    userData.password = hashedPassword;
    let user = await userController.updateUserInfo(userData);

    res.send(user);
});

route.post("/register", async (req, res) => {
    try {
        console.log("Registering");
        //validation
        if (!req.body.username) {
            res.status(422).send(`error: username is required`);
        } else if (!req.body.password) {
            res.status(422).send(`error: password is required`);
        } else if (!req.body.fName) {
            res.status(422).send(`error: first name is required`);
        } else if (!req.body.age) {
            res.status(422).send(`error: age is required`);
        } else {
            let userData = req.body;

            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            userData.password = hashedPassword;

            let user = await userController.signUp(userData);
            res.status(201).send(`User ${userData.fName} was registered successfully`);
        }
    } catch (error) {
        res.status(500).send("Error");
    }
});

route.post("/login", async (req, res) => {
    let user = await userController.signIn(req.body.username);
    if (user === null) {
        res.status(401).send("Invalid Credentials");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send(`Logged in successfully, welcome ${user.fName}`);
        } else {
            res.status(401).send("Invalid Credentials");
        }
    } catch (error) {
        res.status.send();
    }
});

module.exports = route;
