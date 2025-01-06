const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const cs = input[1].split(' ').map(Number)
const total = +input[2]

let upper = Math.max(...cs)
let lower = 1

let result
while (lower <= upper) {
  const mid = Math.floor((lower + upper) / 2)
  const sub = subTotal(mid)
  if (sub > total) upper = mid - 1
  else {
    result = mid
    lower = mid + 1
  }
}

console.log(result)

function subTotal(cap = 10e5) {
  return cs.reduce((acc, cur) => acc + Math.min(cur, cap), 0)
}
