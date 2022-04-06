let repeatNumber = new Array();
for (let number = 0; number <= 100; number++) {
  if (number % 11 == 0 && number != 0) {
    repeatNumber.push(number);
  }
}
console.log("Reapeated numbers : " + repeatNumber);
