'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
var faker = require('faker');
var firstRandom = faker.random.number();
var secondRandom = faker.random.number();
var randomName = faker.name.findName();
console.log(greet(randomName));
console.log(math.add(firstRandom, secondRandom));
console.log(math.subtract(firstRandom, secondRandom));
console.log(math.multiply(firstRandom, secondRandom));
console.log(math.divide(firstRandom, secondRandom));
console.log(greet.hello(randomName));
