import express from "express";

const PORT = 8080;
const app = express();

app.use(express.static("public"));

app.get("/synchronize-time", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no=cache",
    Connection: "keep-alive",
  });
  setInterval(() => {
    res.write(`data: ${new Date().toTimeString()}\n\n`);
  }, 1000);
});

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
