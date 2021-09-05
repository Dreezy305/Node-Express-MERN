// modules - Escapulated code (only share minimum)
// every file is a module by default
// common js, every file is module (by default)

const names = require("./4-names");
console.log(names);
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi("idris");
sayHi(names.john);
sayHi(names.peter);
