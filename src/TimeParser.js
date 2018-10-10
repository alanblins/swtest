const HourConverter = require('./HourConverter');

function parseToHours (timeString) {
  const { unitTime, timeValue } = breakValues(timeString);
  const converter = HourConverter.converters[unitTime];
  return parseInt(converter(timeValue));
}

function createPatternTimeConsumable (units) {
  const timeUnitsWithOptionalSRegex = units.map(timeUnit => timeUnit + '(s?)');
  const timeUnitsSeparatedPipe = timeUnitsWithOptionalSRegex.join('|');
  const pattern = new RegExp(`\\d+[^\\S\\n]+(${timeUnitsSeparatedPipe})`, 'gm');
  return pattern;
}

function isParseableTime (valueString) {
  const patternConsumable = createPatternTimeConsumable(HourConverter.units);
  return patternConsumable.test(valueString);
}

function breakValues (timeString) {
  const timeValue = extractTimeValue(timeString);
  const unitTime = extractUnitTime(timeString);
  return {
    unitTime,
    timeValue
  };
}

function extractUnitTime (timeString) {
  timeString = timeString.toString().trim();
  let unitTime = /[^0-9]+/gm.exec(timeString);
  unitTime = /[^sS]+/gm.exec(unitTime)[0].trim();
  unitTime = unitTime.toString().trim().toLowerCase();
  return unitTime;
}

function extractTimeValue (timeString) {
  timeString = timeString.toString().trim();
  let pattern = /\d+/gm;
  return parseInt(pattern.exec(timeString).toString());
}

module.exports = {
  parseToHours,
  isParseableTime,
  extractUnitTime,
  breakValues
};
