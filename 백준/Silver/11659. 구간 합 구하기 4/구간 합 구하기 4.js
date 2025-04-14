const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number))

const [n, m] = input[0]
const nums = input[1]

const prefix = Array(n + 1).fill(0)
for (let i = 0; i < n; i++) {
  const num = nums[i]
  prefix[i + 1] = prefix[i] + num
}

const res = []

const tests = input.slice(2)
for (let i = 0; i < m; i++) {
  const [start, end] = tests[i]
  res.push(prefix[end] - prefix[start - 1])
}

console.log(res.join('\n'))
