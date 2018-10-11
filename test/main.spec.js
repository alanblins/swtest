var assert = require('chai').assert;
const Main = require('../src/main');

describe('Main', function () {
  describe('validateArg', function () {
    it('no args throws error', function () {
      assert.throws(function () {
        Main.validateArg(undefined);
      }, Error, 'You must provide the distance');
    });

    it('string args throws error', function () {
      assert.throws(function () {
        Main.validateArg('asdf');
      }, Error, 'The distance must be integer');
    });

    it('negative args throws error', function () {
      assert.throws(function () {
        Main.validateArg(-10);
      }, Error, 'The distance must be greater than or equal 0');
    });
  });
});
