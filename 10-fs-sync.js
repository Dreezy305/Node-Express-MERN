// file system (FS) module
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// readFileSync reads content of a file
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

// writeFileSync writes a new file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
