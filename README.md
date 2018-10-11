[![Build Status](https://travis-ci.org/alanblins/swtest.svg?branch=master)](https://travis-ci.org/alanblins/swtest)
# What does it do?
This read the data from the api from https://swapi.co. The application takes as input a distance in mega lights (MGLT). It calculates the amount of stops required to make the distance between the planets.

# Requirements
Install nodejs 10

## Windows
https://nodejs.org/dist/v10.12.0/node-v10.12.0-x64.msi

## Ubuntu
```sh
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
More information at: https://nodejs.org/en/download/package-manager/

# Install
```sh
npm i
```

# How to run console app
```sh
npm run app $distance
```

e.g.:

```sh
npm run app 1000000
```
output:
```sh
Y-wing: 74
Millennium Falcon: 9
Rebel Transport: 11
```

# Test
```sh
npm test
```
