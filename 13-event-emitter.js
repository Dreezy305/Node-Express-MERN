// event programming
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`user name is ${name} and id is ${id}`);
});

customEmitter.on("response", () => {
  console.log("not good enough");
});

customEmitter.emit("response", "john", 25);
