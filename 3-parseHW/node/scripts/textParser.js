import fs from "fs";
import { parse } from "csv-parse/sync";

export const parseText = (filePath, delimiter = " ") => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return parse(fileContent, { columns: true, delimiter });
};
