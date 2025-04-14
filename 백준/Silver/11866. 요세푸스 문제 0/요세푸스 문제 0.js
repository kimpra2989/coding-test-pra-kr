const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, k] = input[0].split(' ').map(Number)

const nums = new Array(n + 1).fill(false)

let idx = 0
const res = []
for (let i = 0; i < n; i++) {
  let count = 0
  while (count < k) {
    idx++
    if (idx > n) {
      idx -= n
    }

    if (!nums[idx]) count++
  }

  nums[idx] = true
  res.push(idx)
}

console.log('<' + res.join(', ') + '>')
