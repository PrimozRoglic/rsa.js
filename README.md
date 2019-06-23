# RSA.js

This is a simple javascript implementation of the RSA protocol.

## Usage

Make sure you are located in the root directory of the repo.

### Key generation
`node index.js keyGen bitLength`

Example:  

```node index.js keyGen 200```

Output:
```
{ privKey:
   16954976399285438921794663501569442589369381262668438613172567451479356170826263602719687287439000294872841092754072245n,
  pubKey: 65537n,
  modulus:
   248520883053633237548214156313197128038058927158050052870204426013162831563616350936880148646497325348182465415128971071n }
```

### Encryption
`node index.js encrypt message pubKey modulus`

Example:  

```
node index.js encrypt "Hello World" 65537n 248520883053633237548214156313197128038058927158050052870204426013162831563616350936880148646497325348182465415128971071n
```

Output:
```
228330125306521016027408724198298194464643672889066840642634584098887056086731732761890355185770132374033716999795886420n
```

### Decryption
`node index.js decrypt encryptedMessage privKey modulus`

Example:  

```
node index.js decrypt 228330125306521016027408724198298194464643672889066840642634584098887056086731732761890355185770132374033716999795886420n 16954976399285438921794663501569442589369381262668438613172567451479356170826263602719687287439000294872841092754072245n 248520883053633237548214156313197128038058927158050052870204426013162831563616350936880148646497325348182465415128971071n
```

Output:
```
Hello World
```

## References

### Theory

[RSA wiki](https://en.wikipedia.org/wiki/RSA_(cryptosystem))  
[Miller-Rabin wiki](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test)  
[Modular exponentiation wiki](https://en.wikipedia.org/wiki/Modular_exponentiation)  
[Integer square root wiki](https://en.wikipedia.org/wiki/Integer_square_root)  
[Newton method wiki](https://en.wikipedia.org/wiki/Newton%27s_method) 
[Extended Euclidean Algorithm wiki](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm)  
[Euclidean algorithm wiki](https://en.wikipedia.org/wiki/Euclidean_algorithm)  
[ASCII wiki](https://en.wikipedia.org/wiki/ASCII)  

### JavaScript
[JS BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)  
[JS BigInt guide](https://golb.hplar.ch/2018/09/javascript-bigint.html)  

### Useful tools
[First 10000 primes](https://primes.utm.edu/lists/small/10000.txt)  
[BigPrimes](https://bigprimes.org/)  
[Decimal-to-binary](https://codebeautify.org/decimal-binary-converter)  



