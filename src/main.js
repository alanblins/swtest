const StarshipModel = require('./api/StarshipModel');
const CalcStop = require('./CalcStop');
const DisplayConsole = require('./DisplayConsole');
const Validator = require('./Validator');

function show (distance) {
  try {
    validateArg(distance);
    StarshipModel.listAll().then(function (startships) {
      let results = CalcStop.calcStopsStarships(startships, distance);
      DisplayConsole.displayResults(results);
    });
  } catch (err) {
    console.error(err);
  }
}

function validateArg (distance) {
  if (!distance) {
    throw new Error('You must provide the distance');
  }
  if (!Validator.isNumber(distance) || !Number.isInteger(distance)) {
    throw new Error('The distance must be integer');
  }

  if (distance < 0) {
    throw new Error('The distance must be greater than or equal 0');
  }
}

module.exports = {
  show,
  validateArg
};
