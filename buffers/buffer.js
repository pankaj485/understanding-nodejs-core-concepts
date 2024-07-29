const { Buffer } = require("buffer");

// creating buffer of size 4 bytes
const buffer = Buffer.alloc(4);

// *NOTE: values are displayed in hexadecimal

// logging buffer and values at each index
console.log("buffer: ", buffer);
console.log("buffer[0]: ", buffer[0]);
console.log("buffer[1]: ", buffer[1]);
console.log("buffer[2]: ", buffer[2]);
console.log("buffer[3]: ", buffer[3]);

// setting value of buffer (in hexadecimal)
buffer[0] = 0xf4; // 0x indicates hexadecimal system while F4 is 244 in decimal
buffer[1] = 0xa4; // 0x indicates hexadecimal system while F4 is 244 in decimal
buffer[2] = 0xff; // 0x indicates hexadecimal system while F4 is 244 in decimal
buffer[3] = 0xf1; // 0x indicates hexadecimal system while F4 is 244 in decimal

// logging newly allocated buffer
console.log("buffer[0]: ", buffer[0]);
console.log("buffer[1]: ", buffer[1]);
console.log("buffer[2]: ", buffer[2]);
console.log("buffer[3]: ", buffer[3]);
