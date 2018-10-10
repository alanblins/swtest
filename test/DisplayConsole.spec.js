let sinon = require('sinon');
let assert = require('assert');
const DisplayConsole = require('../src/DisplayConsole');

describe('DisplayConsole', function () {
  describe('show', function () {
    beforeEach(function () {
      this.consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(function () {
      this.consoleSpy.restore();
    });

    it('should console.log print wing: 10', function () {
      DisplayConsole.displayResults([{ name: 'wing', stops: 10 }]);
      assert(this.consoleSpy.calledWith(`wing: 10 \n`));
    });
  });
});
