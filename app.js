// working with OS module
const os = require("os");

// info about a user
const user = os.userInfo();
console.log(user);

// method returns system up time in seconds
console.log(`The system uptime is ${os.uptime()} secs`);
