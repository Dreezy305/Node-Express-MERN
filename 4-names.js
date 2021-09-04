// modules - Escapulated code (only share minimum)
// every file is a module by default

const secret = "SUPER SECRET";
const john = "john";
const peter = "peter";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("idris");
sayHi(secret);
sayHi(john);
sayHi(peter);
