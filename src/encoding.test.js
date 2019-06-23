const {
  stringToNumber,
  numberToString
} = require("./encoding.js");

let testString = "Hello World";

console.log(numberToString(stringToNumber(testString, 2 ** 200)));
console.log(testString);
// fails ???
console.assert(numberToString(stringToNumber(testString, 2 ** 200)) === testString);