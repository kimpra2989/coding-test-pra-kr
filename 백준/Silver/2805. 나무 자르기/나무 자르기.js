const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, target] = input[0].split(' ').map(Number)
const ws = input[1].split(' ').map(Number)
let start = 0
let end = Math.max(...ws)

let result
while (start <= end) {
  const mid = Math.floor((start + end) / 2)
  let total = 0
  for (let w of ws) {
    total += Math.max(w - mid, 0)
  }

  if (total < target) end = mid - 1
  else {
    result = mid
    start = mid + 1
  }
}

console.log(result)
