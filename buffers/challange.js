/* 
  TODO: Store following binary in a buffer and then read it with character encoding
  "00010 0100 0110 1001 0010 0001"
*/

const { Buffer } = require("buffer");

// Size of the binary is 24 bits. It is equivalent to 3 bytes
const buffer1 = Buffer.alloc(3);

// Method 1: storing binary directly in buffer
// buffer[0] = "0100100";
// buffer[1] = "01101001";
// buffer[2] = "00100001";

// Method 2: converting the number to hexadecimal and storing in buffer
buffer1[0] = 0x48;
buffer1[1] = 0x69;
buffer1[2] = 0x21;

// Method: using from method to directly write into buffer
// NOTE: In this way buffer size doesn't has to be specified and the size is automatically specified
const buffer2 = Buffer.from([0x48, 0x69, 0x21]);

// logging raw buffer
console.log("buffer1 ", buffer1);
console.log("buffer2 ", buffer2);

// logging with utf-8 character encoding
console.log("buffer1 ascii: ", buffer1.toString("utf-8"));
console.log("buffer2 ascii: ", buffer2.toString("utf-8"));

// logging with ascii character encoding
console.log("buffer1 utf-8: ", buffer1.toString("ascii"));
console.log("buffer2 utf-8: ", buffer2.toString("ascii"));
