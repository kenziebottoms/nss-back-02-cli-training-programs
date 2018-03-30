"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db/programs.sqlite");

module.exports = () => {
  db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS Programs`);
    db.run(`CREATE TABLE IF NOT EXISTS Programs (
      id INTEGER PRIMARY KEY,
      seats INTEGER,
      instructor TEXT,
      start_date TEXT,
      end_date TEXT,
      category TEXT
    )`);
  });
};