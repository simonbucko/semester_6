import express from "express";
import xmlparser from "express-xml-bodyparser";
import bodyParser from "body-parser";
import yaml from "js-yaml";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;
const PYTHON_SERVER_URL = "http://127.0.0.1:8000";

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
    const response = await fetch(`${PYTHON_SERVER_URL}/api/csv`, {
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

app.post(
  "/api/text",
  bodyParser.text({ type: "text/csv" }),
  async (req, res) => {
    console.log(req.body);
    const response = await fetch(`${PYTHON_SERVER_URL}/api/text`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
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
