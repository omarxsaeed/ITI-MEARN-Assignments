const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/university").then(() => {
    console.log("DB Connected");
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
