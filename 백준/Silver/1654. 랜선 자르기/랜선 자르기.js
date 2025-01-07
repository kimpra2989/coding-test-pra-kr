const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, target] = input[0].split(' ').map(Number)
const cs = input.slice(1).map(Number)
let start = 0
let end = Math.max(...cs)

let result
while (start <= end) {
  const mid = Math.floor((start + end) / 2)
  let total = 0
  for (let c of cs) {
    total += Math.floor(c / mid)
  }

  if (total < target) {
    end = mid - 1
  } else {
    result = mid
    start = mid + 1
  }
}

console.log(result)
