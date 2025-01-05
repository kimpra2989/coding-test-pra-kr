// .뺴고 제출
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const diss = input[1].split(' ').map(BigInt)
const prices = input[2].split(' ').slice(0, -1).map(BigInt)

let min = BigInt(10e9)
let cost = 0n

prices.forEach((price, idx) => {
  if (min > price) {
    min = price
  }

  cost += min * diss[idx]
})

console.log(cost.toString())
