let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// console.log(input);
const len = input[1].split(" ").map(Number);
const price = input[2].split(" ").map(Number);
price.pop();
// console.log(len, price)

let result = 0;
for (let i = 0; i < price.length - 1; i++) {
  let std = price[i];
  let total_Len = len[i];
  let skip = 0;
  for (let j = i + 1; j < price.length; j++) {
    if (std > price[j]) {
      result += total_Len * price[i];
      break;
    }

    if (j == price.length - 1) {
      total_Len += len[j];
      result += total_Len * price[i];
      break;
    }
    total_Len += len[j];
    skip++;
  }
  i += skip;
}
console.log(result);
