var assert = require('assert');
const CalcStop = require('../src/CalcStop');
describe('Calculation', function () {
  const distance = 1000000;
  describe('calc stops', function () {
    it('should return Rebel and 11 stops if MGLT is 20 and consumables is 6 months', function () {
      let starship = {
        name: 'Rebel',
        consumables: '6 months',
        MGLT: '20'
      };

      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.name, 'Rebel');
      assert.strict.equal(result.stops, 11);
    });

    it('should return 11 stops if consumables is 6 month and distance is 1.000.000', function () {
      let starship = {
        name: 'Rebel',
        consumables: '  6 month  ',
        MGLT: '20'
      };

      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.name, 'Rebel');
      assert.strict.equal(result.stops, 11);
    });

    it('should return 0 stops if consumables 5 hours and distance is 100', function () {
      let starship = {
        name: 'Rebel',
        consumables: '5 hours',
        MGLT: '20'
      };

      let result = CalcStop.calcStopStarship(starship, 100);
      assert.strict.equal(result.name, 'Rebel');
      assert.strict.equal(result.stops, 0);
    });

    it('should return 1 stop if consumables is 5 hours and distance 101', function () {
      let starship = {
        name: 'Rebel',
        consumables: '5 hours',
        MGLT: '20'
      };

      let result = CalcStop.calcStopStarship(starship, 101);
      assert.strict.equal(result.stops, 1);
    });

    it('should return 1 stops if consumables is 5 hours and distance 200', function () {
      let starship = {
        name: 'Rebel',
        consumables: '5 hours',
        MGLT: '20'
      };

      let result = CalcStop.calcStopStarship(starship, 200);
      assert.strict.equal(result.stops, 1);
    });

    it('should return 0 stops if distance is 0', function () {
      let starship = {
        name: 'Rebel',
        consumables: '5 hours',
        MGLT: '20'
      };

      let result = CalcStop.calcStopStarship(starship, 0);
      assert.strict.equal(result.stops, 0);
    });

    it('should return unknown stops if consumables is 0 hours', function () {
      let starship = {
        name: 'Rebel',
        consumables: '0 hours',
        MGLT: '20'
      };

      let result = CalcStop.calcStopStarship(starship, 10);
      assert.strict.equal(result.stops, 'unknown');
    });

    it('should return 9 stops if distance is 1000000 and consumables is 2 months', function () {
      let starship = {
        name: 'Falcon',
        consumables: '2 months',
        MGLT: '75'
      };

      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.stops, 9);
    });

    it('should return 9 stops if distance is 1000000 and consumables is 2 month', function () {
      let starship = {
        name: 'Falcon',
        consumables: '2 month',
        MGLT: '75'
      };

      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.stops, 9);
    });

    it('should return 74 stops if distance is 1000000 and consumables 1 week', function () {
      let starship = {
        name: 'Y-wing',
        consumables: '1 week',
        MGLT: '80'
      };
      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.stops, 74);
    });

    it('should return 74 stops if distance is 1000000 and consumables 1 weeks', function () {
      let starship = {
        name: 'Y-wing',
        consumables: '1 weeks',
        MGLT: '80'
      };
      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.stops, 74);
    });

    it('should return unknown stops if MGLT is unknown', function () {
      let starship = {
        name: 'Y-wing',
        consumables: '1 week',
        MGLT: 'unknown'
      };
      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.stops, 'unknown');
    });

    it('should return unknown stops if consumables is unknown', function () {
      let starship = {
        name: 'Falcon',
        consumables: 'unknown',
        MGLT: '90'
      };
      let result = CalcStop.calcStopStarship(starship, distance);
      assert.strict.equal(result.stops, 'unknown');
    });
  });
});
