import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "database.json");
const database = loadDatabase();

export const getAllRegistereeForUserCreated = () => {
  return database.hooks.userCreated;
};

export const getAllRegistereeForUserDeleted = () => {
  return database.hooks.userDeleted;
};

export const registerForUserCreation = (url) => {
  database.hooks.userCreated.push(url);
  saveChanges();
};

export const unregisterForUserCreation = (url) => {
  database.hooks.userCreated = database.hooks.userCreated.filter(
    (item) => item !== url
  );
  saveChanges();
};

export const registerForUserDeletion = (url) => {
  database.hooks.userDeleted.push(url);
  saveChanges();
};

export const unregisterForUserDeletion = (url) => {
  database.hooks.userDeleted = database.hooks.userDeleted.filter(
    (item) => item !== url
  );
  saveChanges();
};

function loadDatabase() {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

function saveChanges() {
  fs.writeFileSync(filePath, JSON.stringify(database));
}
