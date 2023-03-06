import express from "express";
import fetch from "node-fetch";

const PORT = 8081;
const HOOK_ROUTE = "/hook/payload";
const app = express();

app.use(express.json());

const registerHook = async () => {
  const requestBody = {
    registeredUrl: `http://127.0.0.1:${PORT}${HOOK_ROUTE}`,
  };
  await fetch("http://127.0.0.1:8080/hook/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};

await registerHook();

app.post(HOOK_ROUTE, (req, res) => {
  console.log(req.body);
  res.send({});
});

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
