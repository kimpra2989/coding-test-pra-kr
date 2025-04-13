const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()

let [n, k] = input.split(' ').map(Number)

k = Math.min(n - k, k)

const top = factorial(n, k)
const bottom = factorial(k)

console.log(top / bottom)

function factorial(n, count = n) {
  let res = 1
  for (let i = 0; i < count; i++) {
    res *= n - i
  }

  return res
}
