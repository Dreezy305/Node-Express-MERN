// working with OS module
const os = require("os");

// info about a user
const user = os.userInfo();
console.log(user);

// method returns system up time in seconds
console.log(`The system uptime is ${os.uptime()} secs`);

// gets info about a particular OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
