let users = [];

// const EditData = (data, id, call) => {
//   const newData = data.map((item) =>
//     item.id === id ? { ...item, call } : item
//   );
//   return newData;
// };

const SocketServer = (socket) => {
  socket.on("joinUser", (user) => {
    console.log("user", user);
    users.filter((e, i) => e.id != user._id);
    users.push({
      id: user?.user?._id,
      socketId: socket.id,
    });
  });

  socket.on("disconnect", () => {
    users.find((user) => user.socketId === socket.id);
    users = users.filter((user) => user.socketId !== socket.id);
  });

  socket.on("turnLedAction", (newLedStatus) => {
    users.forEach((user) => {
      socket.to(`${user.socketId}`).emit("turnLedActionToClient", newLedStatus);
    });
  });

  // Notification
  socket.on("createNotify", (msg) => {
    const client = users.find((user) => msg.userId === user.id);
    client && socket.to(`${client.socketId}`).emit("createNotifyToClient", msg);
  });

  socket.on("removeNotify", (msg) => {
    const client = users.find((user) => msg.userId === user.id);
    client && socket.to(`${client.socketId}`).emit("removeNotifyToClient", msg);
  });
};

module.exports = SocketServer;
