import express from "express";
import xml2js from "xml2js";
import xmlparser from "express-xml-bodyparser";

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

app.post("/api/yaml", (req, res) => {
  console.log(req.body);
  res.json("hello");
});

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
