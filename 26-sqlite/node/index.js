import db from "./database/connection.js";

db.exec(`CREATE TABLE IF NOT EXISTS movies (title, year, score)`);

db.run(
  `INSERT INTO movies VALUES
(?, ?, ?),
(?, ?, ?)`,
  [
    "Monty Python and the Holy Grail",
    1975,
    8.2,
    "And Now for Something Completely Different",
    1971,
    7.5,
  ]
);

const movies = await db.all(`SELECT * FROM movies`);
console.log(movies);
