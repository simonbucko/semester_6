import express from "express";
import xmlparser from "express-xml-bodyparser";
import bodyParser from "body-parser";
import yaml from "js-yaml";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.post("/api/json", bodyParser.json(), (req, res) => {
  res.json(req.body);
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

app.post(
  "/api/csv",
  bodyParser.text({ type: "text/csv" }),
  async (req, res) => {
    console.log(req.body);
    const response = await fetch("http://127.0.0.1:8000/api/csv", {
      method: "POST",
      headers: {
        "Content-Type": "text/csv",
      },
      body: req.body,
    });
    const data = await response.json();
    res.json(data);
  }
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
