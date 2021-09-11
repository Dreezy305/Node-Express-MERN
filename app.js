// event programming
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("data recieved");
});

customEmitter.on("response", () => {
  console.log("not good enough");
});

customEmitter.emit("response");
