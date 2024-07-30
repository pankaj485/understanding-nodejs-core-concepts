const { Buffer } = require("buffer");

// NOTE:
// 1byte => 8 bits
// 1 MB = 1,048,576 bytes, 1,048,576 * 8 => 8,388,608 bits
// 100MB = 838,860,800 bits

// create a new buffer of size 100 MB
const buffer = Buffer.alloc(838860800);

// fill buffer with content
buffer.fill(0xd1);

console.log("buffer length: ", buffer.length);
console.log("buffer: ", buffer);
