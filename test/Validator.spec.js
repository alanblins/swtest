var assert = require('assert');
const TimeParser = require('../src/TimeParser');
const Validator = require('../src/Validator');

describe('Validator', function () {
  describe('isNumber', function () {
    it('should return isNumber as true', function () {
      let starship = {
        name: 'Rebel',
        consumables: '6 months',
        MGLT: '20'
      };
      let resultMglt = Validator.isNumber(starship.MGLT);
      assert.strict.equal(resultMglt, true);
    });
  });
  describe('isParseableTime', function () {
    it('should return isParseableTimeResult true', function () {
      let starship = {
        name: 'Rebel',
        consumables: '6 months',
        MGLT: '20'
      };
      let isParseableTimeResult = TimeParser.isParseableTime(starship.consumables);
      assert.strict.equal(isParseableTimeResult, true);
    });
  });
  describe('isCalculable', function () {
    it('should return calculable true', function () {
      let starship = {
        name: 'Rebel',
        consumables: '6 months',
        MGLT: '20'
      };
      let result = Validator.isCalculable(starship);
      assert.strict.equal(result, true);
    });

    it('should return calculable false', function () {
      let starship = {
        name: 'Rebel',
        consumables: '6 months',
        MGLT: 'asasdf'
      };
      let result = Validator.isCalculable(starship);
      assert.strict.equal(result, false);
    });

    it('should return calculable false', function () {
      let starship = {
        name: 'Rebel',
        consumables: 'asdfasdf',
        MGLT: '20'
      };
      let result = Validator.isCalculable(starship);
      assert.strict.equal(result, false);
    });
  });
});
