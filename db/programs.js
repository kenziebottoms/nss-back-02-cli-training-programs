"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("programs.sqlite");

module.exports.new = () => {
  return new Promise((resolve, reject) => {
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