const { generateNbitPrime } = require("./primes.js");
const { modMulInv, modularPower, lcm } = require("./numbers.js");
const { stringToNumber, numberToString } = require("./encoding.js");

function keyGen(bitLength) {
  let q = generateNbitPrime(bitLength);
  let p = generateNbitPrime(bitLength-2);
  
  let n = p*q;
  
  let lambda = lcm(p-1n, q-1n);

  let e = 65537n;
  console.assert(lambda%e !== 0n);
  
  let d = modMulInv(e, lambda);
  
  return {
    privKey: d,
    pubKey: e,
    modulus: n
  }
}

function encrypt(msg, pubKey, modulus) {
  let msgAsNum =  stringToNumber(msg, modulus);
  let enc = modularPower(msgAsNum, pubKey, modulus);
  
  return enc;
}

function decrypt(enc, privKey, modulus) {
  let msgAsNum = modularPower(enc, privKey, modulus);
  return numberToString(msgAsNum);
}

module.exports = {
  keyGen,
  encrypt,
  decrypt
}

