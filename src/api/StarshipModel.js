const SWAPI = require('./SWAPI');
function listAll () {
  return SWAPI.listAllResourcePromise('starships');
}

module.exports = {
  listAll
};
