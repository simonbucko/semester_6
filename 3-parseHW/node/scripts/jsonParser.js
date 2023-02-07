import fs from "fs";

export const parseJson = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
};
