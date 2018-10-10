var Client = require('node-rest-client').Client;
var endpoint = 'https://swapi.co/api/';
var client = new Client();

function listAllResourcePromise (resource) {
  const nextUrl = endpoint + resource;
  return listAllPromise(nextUrl, []);
}

function listAllAPIPromise (client, nextUrl) {
  return new Promise((resolve, reject) => {
    client.get(nextUrl, function (data, response) {
      resolve({ data, response });
    });
  });
}

function listAllPromise (nextUrl, results) {
  return listAllAPIPromise(client, nextUrl).then(data => {
    results = [...results, ...data.data.results];
    if (data.data.next) {
      return listAllPromise(data.data.next, results);
    } else {
      return results;
    }
  });
}

module.exports = {
  listAllResourcePromise
};
