const {
  getRandomInt,
  sqrt,
  modularPower,
  generateRandomNbitNumber
} = require("./numbers.js");

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

function millerRabin(n, k) {
  let decomposed = decompose(n);
  let flag = false;
  
  for (let i = 0; i<k; i++) {
    let a = BigInt(getRandomInt(2, parseInt(n)-2));
    let x = modularPower(a, decomposed.d, n);
    
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

function isPrimeNice(n) {
   const firstHunderedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 
    59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 
    151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 
    251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 
    359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 
    463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541];
  
  for (let i = 0; i < firstHunderedPrimes.length; i++) {
    let prime = firstHunderedPrimes[i];
    if (n % BigInt(prime) === 0n && !(n === BigInt(prime))) {
      return false; 
    }
  }
  
  // error is 4^-k, 8 gives 0.002% error
  return millerRabin(n, 8);
}

function generateNbitPrime(n) {
  while (true) {
    let candidate = generateRandomNbitNumber(n);
    if (isPrimeNice(candidate)) {
      return candidate; 
    }
  }
}

module.exports = {
  decompose,
  millerRabin,
  isPrimeNaive,
  generateNbitPrime
}
