const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("User has entered the chat");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    // socket.on("disconnect", () => {
    //     console.log("User has left the chat");
    // });
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`));
