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

function isPrimeNaive(n) {
  
  if (n === 2n) return true;
  
  let sqt = sqrt(n);
  
  for ( let i = 2n; i <= sqt; i ++) {
    if (n%i === 0n) {
      console.log("Found divisor: ", i);
      return false;
    }
  }
  return true;
}

function howManyTwos(n) {
  if (n===0n) {
    throw new Error("Number must not be zero"); 
  }
  let i = 0n;
  while (n%2n === 0n) {
    i ++;
    n = n/2n;
  }
  return i;
}

function decompose(n) {
  n  = n-1n;
  let r = howManyTwos(n);
  let d = n/(2n ** r);
  
  return {
    r: r,
    d: d
  }
}

function modularPow(base, exponent, modulus) {
  if (modulus === 1n) return 0n;
  let c = 1n;
  for (let i = 0n; i < exponent; i++) {
    c = (c*base) % modulus;
  }
  return c;
}

function millerRabin(n, k) {
  let decomposed = decompose(n);
  let flag = false;
  
  for (let i = 0; i<k; i++) {
    let a = BigInt(getRandomInt(2, parseInt(n)-2));
    let x = modularPow(a, decomposed.d, n);
    
    if (x === 1n || x === n-1n) {
      continue; 
    }
    
    for (let j = 0n; j<decomposed.r-1n; j++) {
      x = (x*x) % n;
      if (x === n-1n) {
        flag = true
        break;
      }
    }
    
    if (flag) {
      flag =  false;
      continue;
    }
    
    return false;
  }
  return true;
}

module.exports = {
  decompose,
  millerRabin,
  isPrimeNaive
}
