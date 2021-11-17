const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected :D");
  socket.on("message", ({message,id,time}) => {
    console.log(message,id,time);
    io.emit("message", {message,id,time});
  });
});

server.listen(port, () => console.log("server running on port:" + port));
