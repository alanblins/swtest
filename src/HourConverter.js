const convertersToHours = {
  'day': function (timeValue) {
    return convertDaysToHours(timeValue);
  },
  'month': function (timeValue) {
    let days = convertMonthsToDays(timeValue);
    return convertDaysToHours(days);
  },
  'year': function (timeValue) {
    let months = convertYearsToMonths(timeValue);
    let days = convertMonthsToDays(months);
    return convertDaysToHours(days);
  },
  'week': function (timeValue) {
    let days = convertWeekToDays(timeValue);
    return convertDaysToHours(days);
  },
  'hour': function (timeValue) {
    return timeValue;
  }
};

const units = Object.keys(convertersToHours);

/**
 * Convert years to months
 * @param {number} years
 */
function convertYearsToMonths (years) {
  return years * 12;
}

function convertMonthsToDays (months) {
  return months * 30;
}

function convertWeekToDays (weeks) {
  return weeks * 7;
}

function convertDaysToHours (days) {
  return days * 24;
}

module.exports = {
  converters: convertersToHours,
  units
};
