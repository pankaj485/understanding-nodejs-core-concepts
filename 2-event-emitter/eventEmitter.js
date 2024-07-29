const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

function triggerEvent1() {
  console.log("event 1 triggred");
}

eventEmitter.on("event1", triggerEvent1);

eventEmitter.emit("event1");

console.log(eventEmitter.eventNames());
console.log(eventEmitter.rawListeners("event1"));
