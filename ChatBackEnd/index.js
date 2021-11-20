const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", ({message,sid,time,rid}) => {
    console.log(message,sid,time,rid);
    io.emit("message", {message,sid,time,rid});
  });
});

server.listen(port, () => console.log("server running on port:" + port));
