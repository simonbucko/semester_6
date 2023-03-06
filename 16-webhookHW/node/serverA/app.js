import express from "express";
import fetch from "node-fetch";

const PORT = 8080;
const app = express();

const registeredHooksURLs = [];

app.use(express.json());

app.post("/hook/register", (req, res) => {
  console.log(req.body);
  registeredHooksURLs.push(req.body.registeredUrl);
  console.log(registeredHooksURLs);
  res.send();
});

app.post("/users", async (req, res) => {
  registeredHooksURLs.forEach(async (hookUrl) => {
    const requestBody = {
      msg: "User created",
    };
    await fetch(hookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
  });
  res.send();
});

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
