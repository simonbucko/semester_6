import WebSocket from "ws";

const websocketClient = new WebSocket("ws://localhost:8082");

websocketClient.on("open", () => {
  console.log("Connected to the server");
  websocketClient.send("This is the message from a client in Node.js");
});

websocketClient.on("error", (error) => {
  console.log(error);
});

websocketClient.on("message", (data) => {
  console.log(`Data from socket server: ${data}`);
});
