import express from "express";
import xmlparser from "express-xml-bodyparser";
import bodyParser from "body-parser";
import yaml from "js-yaml";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/json", (req, res) => {
  console.log(req.body);
  res.json("hello");
});

app.post(
  "/api/yaml",
  bodyParser.text({ type: "application/x-yaml" }),
  (req, res) => {
    const jsonData = yaml.load(req.body);
    res.json(jsonData);
  }
);

app.post(
  "/api/xml",
  xmlparser({
    trim: false,
    explicitArray: false,
  }),
  (req, res) => {
    res.json(req.body);
  }
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
