/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// source: https://golb.hplar.ch/2018/09/javascript-bigint.html
function sqrt(value) {
    if (value < 0n) {
      throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
      return value;
    }

    function newtonIteration(n, x0) {
      const x1 = ((n / x0) + x0) >> 1n;
      if (x0 === x1 || x0 === (x1 - 1n)) {
        return x0;
      }
      return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}

function modularPow(base, exponent, modulus) {
  if (modulus === 1n) return 0n;
  let c = 1n;
  for (let i = 0n; i < exponent; i++) {
    c = (c*base) % modulus;
  }
  return c;
}

// repeated squaring method
function modularPower(base, exponent, modulus) {
  if (modulus === 1n)
    return 0n;
  let result = 1n;
  base = base % modulus;
  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % modulus;
    }
    exponent = exponent >> 1n;
    base = (base * base) % modulus;
  }
  return result;
}

function generateRandomNbitNumber(n) {
  let boolArray = generatinNBitBoolArray(n);
  let bigInt = boolArrayToBigInt(boolArray);
  return bigInt;
}

function boolArrayToBigInt(arr) {
  let binaryString = arr.map(bool => {
    return bool ? 1 : 0  
  }).toString().replace(/,/g, '');
  return BigInt("0b"+binaryString);
}

function generatinNBitBoolArray(n) {
  let array = []
  for ( let i = 0; i < n; i++) {
    if (i === 0) { 
      array.push(true);
    }
    else {
      array.push(coinFlip());
    }  
  }
  return array
}

function coinFlip() {
  let randomNumber = Math.random();
  if (randomNumber >= 0.5) {
    return true;
  }
  return false;
}

function gcd(a, b) {
    if (b === 0n)
       return a; 
    else
       return gcd(b, a % b);
}

function lcm(a, b) {
   return ((a*b)/gcd(a,b));
}

function extended_gcd(a, b) {
    let s = 0n;    let old_s = 1n;
    let t = 1n;    let old_t = 0n;
    let r = b;     let old_r = a;
    
    while (r !== 0n) {
      let quotient = old_r / r;
      [old_r, r] = [r, old_r - quotient * r];
      [old_s, s] = [s, old_s - quotient * s];
      [old_t, t] = [t, old_t - quotient * t];
    }
  
    return {
      x: old_s,
      y: old_t,
      gcd:  old_r
    }
}

function modMulInv(a, b) {
  
  let extendedGcdResult = extended_gcd(a, b);
  if (extendedGcdResult.x < 0) {
    return extendedGcdResult.x + b; 
  } 
  return extendedGcdResult.x;
}

module.exports = {
  getRandomInt,
  sqrt,
  modularPower,
  generateRandomNbitNumber,
  gcd,
  lcm,
  extended_gcd,
  modMulInv
}