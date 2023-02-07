import fs from "fs";
import xmljs from "xml-js";

export const parseXml = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return xmljs.xml2js(fileContent, {
    compact: true,
    ignoreDeclaration: true,
  });
};
