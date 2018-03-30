"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db/programs.sqlite");

module.exports.new = ({instructor, start_date, end_date, category}) => {
  return new Promise((resolve, reject) => {
    if (instructor && start_date && end_date && category) {
      db.run(`INSERT INTO Programs (
                id,
                instructor,
                start_date,
                end_date,
                category
              ) VALUES (
                null,
                "${instructor}",
                "${start_date}",
                "${end_date}",
                "${category}"
              )`, function(err) {
                if (err) return reject(err);
                resolve(this.lastID);
              });
    } else {
      let err = new Error("Please provide an `instructor`, `start_date`, `end_date`, and `category`.");
      reject(err);
    }
    resolve(1);
  });
};

module.exports.delete = id => {
  return new Promise((resolve, reject) => {
    if (id == undefined) {
      let err = new Error("Please provide the ID of a training program to delete.");
      reject(err);
    }
    resolve(1);
  });
};

module.exports.getOne = id => {
  return new Promise((resolve, reject) => {
    resolve({});
  });
};

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    resolve([{}]);
  });
};