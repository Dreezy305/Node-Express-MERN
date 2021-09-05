// path module
const path = require("path");
console.log(path.sep);

// join method
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// base name
const base = path.basename(filePath);
console.log(base);

// resolve gets the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
