let count = 1;
let maximumCount = 1;
let minimumCount = 11;
let numberWithMaximumCount = 0;
let numberWithMinimumCount = 0;
let stopCount = 0;
let diceCountMap = new Map();

function rollDie() {
  let diceValue = Math.floor(Math.random() * 6 + 1);
  console.log("Dice result : " + diceValue);
  return diceValue;
}

while (stopCount < 10) {
  let diceValue = rollDie();
  if (diceCountMap.has(diceValue)) {
    count = diceCountMap.get(diceValue) + 1;
  }
  diceCountMap.set(diceValue, count);
  if (count > stopCount) stopCount = count;
}

for ([key, value] of diceCountMap.entries()) {
  if (value > maximumCount) {
    maximumCount = value;
    numberWithMaximumCount = key;
  }
  if (value < minimumCount) {
    minimumCount = value;
    numberWithMinimumCount = key;
  }
}

console.log("\nDice Map : ");
console.log(diceCountMap);
console.log(
  "\nNumber with Minimum Count : " +
    numberWithMinimumCount +
    "\nNumber with Maximum Count : " +
    numberWithMaximumCount
);
