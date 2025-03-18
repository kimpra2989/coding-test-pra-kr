const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = +input[0]
const nums = input[1].split(' ').map(Number)
const ops = input[2].split(' ').map(Number)

let max = -1e9
let min = 1e9

dfs(1, nums[0])

console.log(max)
console.log(min)

function dfs(idx, value) {
  if (idx >= n) {
    max = Math.max(max, value)
    min = Math.min(min, value)

    return
  }

  for (let i = 0; i < 4; i++) {
    if (ops[i] == 0) continue
    ops[i]--
    dfs(idx + 1, calc(value, nums[idx], i))
    ops[i]++
  }
}

function calc(num1, num2, opIdx) {
  switch (opIdx) {
    case 0:
      return num1 + num2
    case 1:
      return num1 - num2
    case 2:
      return num1 * num2
    case 3:
      return ~~(num1 / num2)
  }
}
