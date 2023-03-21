import express from "express";
import hooksRouter from "./routes/hooks.js";
import usersRouter from "./routes/users.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(hooksRouter);
app.use(usersRouter);

app.post("/users", async (req, res) => {});

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
