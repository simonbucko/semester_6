import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8082 });

server.on("connection", (ws) => {
  console.log("New connnection", server.clients.size);

  ws.on("message", (message) => {
    server.clients.forEach((client) => {
      console.log(`Received message: ${message}`);
      client.send(`A message was sent: ${message}`);
    });
  });
});
