import dotenv from "dotenv";
import express from "express";
import axios from "axios";

dotenv.config();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;
const PORT = process.env.PORT || 8080;

let access_token = "";

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", { client_id: GITHUB_CLIENT_ID });
});

app.get("/github/callback", async (req, res) => {
  const requestToken = req.query.code;

  const response = await axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_SECRET}&code=${requestToken}`,
    headers: {
      accept: "application/json",
    },
  });

  access_token = response.data.access_token;
  res.redirect("/success");
});

app.get("/success", async (req, res) => {
  const response = await axios({
    method: "get",
    url: `https://api.github.com/user`,
    headers: {
      Authorization: "token " + access_token,
    },
  });
  res.render("pages/success", { userData: response.data });
});

app.listen(PORT, () => console.log("App listening on port " + PORT));
