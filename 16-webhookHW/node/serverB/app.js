import express from "express";
import fetch from "node-fetch";

const PORT = 8081;
const HOOK_ROUTE = "/hook/payload";
const app = express();

app.use(express.json());

app.post(HOOK_ROUTE, (req, res) => {
  console.log(req.body);
  res.send({});
});

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));

const registerHookCreateUser = async () => {
  const requestBody = {
    registeredUrl: `http://127.0.0.1:${PORT}${HOOK_ROUTE}`,
  };
  await fetch("http://127.0.0.1:8080/hooks/user-created/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};

const unregisterHookCreateUser = async () => {
  const requestBody = {
    registeredUrl: `http://127.0.0.1:${PORT}${HOOK_ROUTE}`,
  };
  await fetch("http://127.0.0.1:8080/hooks/user-created/unregister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};

const pingCreateUser = async () => {
  const requestBody = {};
  await fetch("http://127.0.0.1:8080/hooks/user-created/ping", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};

const registerHookDeleteUser = async () => {
  const requestBody = {
    registeredUrl: `http://127.0.0.1:${PORT}${HOOK_ROUTE}`,
  };
  await fetch("http://127.0.0.1:8080/hooks/user-deleted/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};

const unregisterHookDeleteUser = async () => {
  const requestBody = {
    registeredUrl: `http://127.0.0.1:${PORT}${HOOK_ROUTE}`,
  };
  await fetch("http://127.0.0.1:8080/hooks/user-deleted/unregister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};

const pingDeleteUser = async () => {
  const requestBody = {};
  await fetch("http://127.0.0.1:8080/hooks/user-deleted/ping", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};

await registerHookCreateUser();
// await pingCreateUser();
// await unregisterHookCreateUser();
// await pingCreateUser();

await registerHookDeleteUser();
// await pingDeleteUser();
// await unregisterHookDeleteUser();
// await pingDeleteUser();
