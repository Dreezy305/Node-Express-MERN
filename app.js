// modules - Escapulated code (only share minimum)
// every file is a module by default
// common js, every file is module (by default)

const names = require("./4-names");
console.log(names);
const greet = require("./5-utils");

greet("idris");
//sayHi(secret);
greet(names.john);
greet(names.peter);
