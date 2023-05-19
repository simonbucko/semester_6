import fs from "fs";
import fetch from "node-fetch";
import { load } from "cheerio";
import db from "./database/connection.js";

// const response = await fetch("https://simonbucko-portfolio.netlify.app/");
// const result = await response.text();

// fs.writeFileSync("index.html", result);

db.exec(`CREATE TABLE IF NOT EXISTS skills (id, name)`);

const page = fs.readFileSync("index.html", "utf-8");
const $ = load(page);

$(".animatedLi").each((index, element) => {
  const skillName = $(element).text();
  db.run(`INSERT INTO skills VALUES (?, ?)`, [index, skillName]);
});

const skills = await db.all(`SELECT * FROM skills ORDER BY id`);

console.log(skills);
