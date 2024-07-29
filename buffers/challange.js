/* 
  TODO: Store following binary in a buffer and then read it with character encoding
  "00010 0100 0110 1001 0010 0001"
*/

const { Buffer } = require("buffer");

// Size of the binary is 24 bits. It is equivalent to 3 bytes
const buffer = Buffer.alloc(3);

// Method 1: storing binary directly in buffer
// buffer[0] = "0100100";
// buffer[1] = "01101001";
// buffer[2] = "00100001";

// Method 2: converting the number to hexadecimal and storing in buffer
buffer[0] = 0x48;
buffer[1] = 0x69;
buffer[2] = 0x21;

// logging raw buffer
console.log(buffer);

// logging with utf-8 character encoding
console.log(buffer.toString("utf-8"));

// logging with ascii character encoding
console.log(buffer.toString("ascii"));
