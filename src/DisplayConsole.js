function sortAlphabetically (results) {
  const resultsSorted = results.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return resultsSorted;
}
function displayResults (results) {
  const resultsSorted = sortAlphabetically(results);
  resultsSorted.forEach(result => {
    displayConsole(result);
  });
}

function displayConsole (result) {
  console.log(`${result.name}: ${result.stops} \n`);
}

module.exports = {
  displayResults
};
