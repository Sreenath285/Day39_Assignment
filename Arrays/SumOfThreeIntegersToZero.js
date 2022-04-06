const prompt = require("prompt-sync")();
let arraySize = prompt("Enter size of the array : ");

let arr = new Array();
for (let a = 0; a < arraySize; a++) {
    arr[a] = prompt("Enter element : ");
}
console.log(arr);

// let count = 0;
for (let i = 0; i < arraySize; i++) {
  for (let j = i + 1; j < arraySize; j++) {
      for (let k = j + 1; k < arraySize; k++) {
          if (arr[i] + arr[j] + arr[k] == 0) {
              console.log("["  + arr[i] + " " + arr[j] + " " + arr[k] + "]");
            //   count++;
          }
      }
  }
}
// console.log("Number of triplets : " + count);
