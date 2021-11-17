const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected :D");
  socket.on("message", (msg) => {
    console.log(msg);
    io.emit("message", msg);
  });
});

server.listen(port, () => console.log("server running on port:" + port));
