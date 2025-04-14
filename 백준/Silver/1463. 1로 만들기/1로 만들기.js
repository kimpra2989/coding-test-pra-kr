const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = +input[0]

const dp = new Array(n + 1).fill(0)
for (let i = 2; i <= n; i++) {
  const targets = [dp[i - 1]]
  if (i % 2 === 0) targets.push(dp[i / 2])
  if (i % 3 === 0) targets.push(dp[i / 3])

  dp[i] = Math.min(...targets) + 1
}

console.log(dp[n])
