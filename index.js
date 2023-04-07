const WebSocket = require("ws");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get("/api/info", (req, res) => {
  res.send("Hoang Long");
});

wss.on("connection", (socket) => {
  console.log(`User Connected: ${socket._socket.remoteAddress}`);

  socket.on("message", (data) => {
    console.log(data);
    const message = JSON.parse(data);
    if (message.type === "join_room") {
      socket.join(message.room);
    } else if (message.type === "send_message") {
      socket
        .to(message.room)
        .send(
          JSON.stringify({ type: "receive_message", content: message.content })
        );
    }
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING", 3001);
});
