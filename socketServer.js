let users = [];

const EditData = (data, id, call) => {
  const newData = data.map((item) =>
    item.id === id ? { ...item, call } : item
  );
  return newData;
};

const SocketServer = (socket) => {
  socket.on("event", (clientId) => {
    users.push({
      clientId,
    });
    console.log(clientId);
    socket.to(`${clientId}`).emit("eventToClient", clientId);
  });
};

module.exports = SocketServer;
