const {
  generateRandomNbitNumber
} = require("./numbers.js");

function testDistribution() {
  const dist = {};
  
  for (let i = 0; i < 100000; i++) {
    let rand = generateRandomNbitNumber(5);
    dist[rand] = dist[rand] ? dist[rand] + 1 : 1;
  };
  
  console.log("Distribution for 5 bit nums: \n", dist);
}

testDistribution();
