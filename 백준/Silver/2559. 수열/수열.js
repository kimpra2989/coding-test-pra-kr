const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [[n, k], ts] = input.map((x) => x.split(' ').map(Number))

let sum = 0
for (let i = 0; i < k; i++) {
  sum += ts[i]
}

let max = sum
for (let i = 0; i + k < n; i++) {
  sum += ts[i + k] - ts[i]
  max = Math.max(max, sum)
}

console.log(max)
