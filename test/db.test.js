"use strict";

const { assert } = require("chai");
const { programs } = require("../db/programs");

describe("programs database interxns", () => {
  describe("createNew()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.createNew);
    });
  });
  describe("delete()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.delete);
    });
  });
  describe("getAll()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.getAll);
    });
  });
  describe("getOne()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.getOne);
    });
  });
});