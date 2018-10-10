const TimeParser = require('./TimeParser');
const Validator = require('./Validator');
const { UNKNOWN } = require('./Constants');
/**
 * Calculate time in hours by distance in MGLT and velocity in MGLT/hour
 * @param {number} distance
 * @param {number} velocity
 */
function calcHoursByDistanceAndVelocity (distance, velocity) {
  return distance / velocity;
}

/**
 *
 * @param {number} consumables
 * @param {number} hoursTotal
 */
function calcStopsByConsumableAndTime (consumables, hoursSpent) {
  return hoursSpent / consumables;
}

function calcStopsByConsumableAndTimeRemainder (consumables, hoursSpent) {
  return hoursSpent % consumables;
}

/**
 *
 * @param {Object} starship
 * @param {number} distance
 */
function calcStopsByDistance (starship, distance) {
  if (distance === 0) {
    return 0;
  }
  let velocity = parseInt(starship.MGLT);
  let consumablesHours = TimeParser.parseToHours(starship.consumables);
  if (consumablesHours === 0) {
    return UNKNOWN;
  }
  let hoursSpent = calcHoursByDistanceAndVelocity(distance, velocity);
  if (hoursSpent === consumablesHours) {
    return 0;
  }
  let stops = calcStopsByConsumableAndTime(consumablesHours, hoursSpent);
  if (calcStopsByConsumableAndTimeRemainder(consumablesHours, hoursSpent) === 0) {
    stops--;
  }
  return parseInt(Math.trunc(stops));
}

/**
 *
 * @param {Object} starship
 * @param {number} distance
 */
function calcStopStarship (starship, distance) {
  let stops = UNKNOWN;
  if (Validator.isCalculable(starship)) {
    stops = calcStopsByDistance(starship, distance);
  }
  let name = starship.name;
  return { name: name, stops: stops, consumables: starship.consumables };
}

/**
 *
 * @param {Array} starships
 * @param {number} distance
 */
function calcStopsStarships (starships, distance) {
  return starships.map(starship => calcStopStarship(starship, distance));
}

module.exports = {
  calcStopsStarships,
  calcStopStarship
};
