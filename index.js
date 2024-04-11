const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const {Server} = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server , {
    cors: {
        origin: "https://localhost:5173",
        methods: ["GET" , "POST"],
    },
});

server.listen(3001, () => {
    console.log("Server Started on PORT:3001")
})