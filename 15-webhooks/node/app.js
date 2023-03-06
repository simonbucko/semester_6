import express from "express";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // this parses form data

app.post("/githubwebhook", (req, res) => {
  const payload = JSON.parse(req.body.payload);
  console.log(payload);
  res.send({});
});

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
