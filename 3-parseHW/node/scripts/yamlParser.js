import yaml from "js-yaml";
import fs from "fs";

export const parseYaml = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const jsonData = yaml.load(fileContent);
  return jsonData;
};
