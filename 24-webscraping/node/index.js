import fs from "fs";
import fetch from "node-fetch";

// const response = await fetch("https://www.proshop.dk/Baerbar-computer");
// const result = await response.text();

// fs.writeFileSync("index.html", result);

import { load } from "cheerio";

const page = fs.readFileSync("index.html", "utf-8");
const $ = load(page);

$("#products [product]").each((index, element) => {
  const name = $(element).find("[product-display-name]").text();
  const price = $(element).find(".site-currency-lg").text();
  console.log(`${price} ===== ${name}`);
});
