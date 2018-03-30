"use strict";

const { assert } = require("chai");
const programs = require("../db/programs");

describe("programs database interxns", () => {
  describe("new()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.new);
    });
    it("should return a promise", () => {
      assert.typeOf(programs.new(), "promise");
    });
  });
  describe("delete()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.delete);
    });
    it("should return a promise", () => {
      assert.typeOf(programs.delete().catch(err => {}), "promise");
    });
    it("should expect an integer as argument", () => {
      programs.delete()
        .then(response => {
          assert.isTrue(false);
        })
        .catch(err => {
          assert.isTrue(true);
        });
      programs.delete(1)
      .then(response => {
        assert.isTrue(true);
      })
      .catch(err => {
        assert.isTrue(false);
      });
    });
  });
  describe("getAll()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.getAll);
    });
    it("should return a promise", () => {
      assert.typeOf(programs.getAll(), "promise");
    });
  });
  describe("getOne()", () => {
    it("should be a function", () => {
      assert.isFunction(programs.getOne);
    });
    it("should return a promise", () => {
      assert.typeOf(programs.getOne(), "promise");
    });
  });
});