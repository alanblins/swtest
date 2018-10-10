const TimeParser = require('./TimeParser');

function isNumber (value) {
  return /\d+/gm.test(value);
}

function isCalculable (starship) {
  if (!isNumber(starship.MGLT) || !TimeParser.isParseableTime(starship.consumables)) {
    return false;
  };
  return true;
}

module.exports = {
  isCalculable,
  isNumber
};
