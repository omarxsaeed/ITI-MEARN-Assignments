const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const todoRoute = require("./Routes/todoRoute");
const app = express();
const port = 3000;

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/ITI").then(() => {
    console.log("Connected");
});

app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoute);
app.use("/todos", todoRoute);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
