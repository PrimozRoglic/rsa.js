function stringToNumber(str, max) {
  let binString = "";
  for (let i = 0; i<str.length; i++) {
    let char = str.charCodeAt(i);
    let charBinString = char.toString(2);
    if (charBinString.length < 7) {
       for (let i = 0; i < 7 - charBinString.length; i ++) {
         charBinString = "0" + charBinString;
       }
    }
    binString += charBinString;
  }
  let num =  BigInt("0b"+binString);
  if (num > max) {
    throw new Error("message too long"); 
  }
  return num;
}

function numberToString(number) {
  let binStr = number.toString(2);
  let limit = 7 - (binStr.length % 7);
  for (let i = 0; i < limit; i++) {
    binStr = "0" + binStr;
  }
  let str = "";
  for (let i = 0; i < binStr.length/7; i++) {
    let start = i*7;
    let ascii = binStr.substring(start, start+7);
    let char = String.fromCharCode(parseInt(ascii, 2));
    str += char;
  }
  return str;
}

module.exports = {
  stringToNumber,
  numberToString
}