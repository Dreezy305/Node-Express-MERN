const { readFile } = require("fs");
const util = require("util");

//readFile("./content/first.txt", "utf-8", (err, data) => {
//  if (err) {
//    return;
//  } else {
//    console.log(data);
//  }
//});

// async non-blocking pattern
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
