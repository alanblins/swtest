const StarshipModel = require('./api/StarshipModel');
const CalcStop = require('./CalcStop');
const DisplayConsole = require('./DisplayConsole');

function show (distance) {
  StarshipModel.listAll().then(function (startships) {
    let results = CalcStop.calcStopsStarships(startships, distance);
    DisplayConsole.displayResults(results);
  });
}

module.exports = {
  show
};
