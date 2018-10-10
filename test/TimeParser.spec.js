var assert = require('assert');
const TimeParser = require('../src/TimeParser');

describe('TimeParser', function () {
  describe('parseToHours', function () {
    it('should return month with 6 months', function () {
      const result = TimeParser.parseToHours('6 months');
      assert.strict.equal(result, 4320);
    });

    it('should return month with 6 months with spaces', function () {
      const result = TimeParser.parseToHours('   6 months  ');
      assert.strict.equal(result, 4320);
    });

    it('should return 15', function () {
      const result = TimeParser.parseToHours('15 hours');
      assert.strict.equal(result, 15);
    });
  });
  describe('breakValues', function () {
    it('should return 6', function () {
      const result = TimeParser.breakValues('   6 months  ');
      assert.strict.equal(result.timeValue, 6);
    });
  });
  describe('extractUnitTime', function () {
    it('should return month', function () {
      const unitTime = TimeParser.extractUnitTime('  6 months  ');
      assert.strict.equal(unitTime, 'month');
    });
  });
});
