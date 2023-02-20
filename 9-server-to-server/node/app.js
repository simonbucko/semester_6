import express from "express";
import fetch from "node-fetch";

const PORT = 8080;
const app = express();

app.get("/date", (req, res) => {
  res.send(new Date());
});

app.get("/datefromfastapi", async (req, res) => {
  const response = await fetch("http://127.0.0.1:8000/date");
  const data = await response.json();
  res.json(data);
});

app.get("/pawel", (req, res) => {
  res.json({
    location: "Circus humberto",
    message: "hello",
  });
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
