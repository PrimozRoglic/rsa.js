const {
  keyGen,
  encrypt,
  decrypt
} = require("./src/rsa.js");

let command = process.argv[2];

let keyGenHandler = () => {
  let bitLength = process.argv[3];
  console.log(keyGen(bitLength));
}

let encryptHandler = () => {
  let pubKey = BigInt(process.argv[4].replace("n", ""));
  let modulus = BigInt(process.argv[5].replace("n", ""));
  let msg = process.argv[3]

  console.log(encrypt(msg, pubKey, modulus));
}

let decryptHandler = () => {
  let pubKey = BigInt(process.argv[4].replace("n", ""));
  let modulus = BigInt(process.argv[5].replace("n", ""));
  let msg = BigInt(process.argv[3].replace("n", ""));

  console.log(decrypt(msg, pubKey, modulus));
}

let commandHandlers = {
  "keyGen": keyGenHandler,
  "encrypt": encryptHandler,
  "decrypt": decryptHandler
}

if (!(command in commandHandlers)) {
  throw new Error("Unknown command.");
}

commandHandlers[command]();


