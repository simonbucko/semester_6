import { parseJson } from "./scripts/jsonParser.js";
import { parseYaml } from "./scripts/yamlParser.js";
import { parseCsv } from "./scripts/csvParser.js";
import { parseText } from "./scripts/textParser.js";
import { parseXml } from "./scripts/xmlParser.js";

try {
  console.log(parseYaml("../files/me.yaml"));
} catch (error) {
  console.log(error);
}

try {
  console.log(parseJson("../files/me.json"));
} catch (error) {
  console.log(error);
}

try {
  console.log(parseCsv("../files/me.csv"));
} catch (error) {
  console.log(error);
}

try {
  console.log(parseText("../files/me.txt", "::"));
} catch (error) {
  console.log(error);
}

try {
  console.log(parseXml("../files/me.xml"));
} catch (error) {
  console.log(error);
}
