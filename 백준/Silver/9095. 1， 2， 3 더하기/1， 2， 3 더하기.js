const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const n = input[0]
const tests = input.slice(1)

const res = []
for (const test of tests) {
  res.push(calc(test))
}

console.log(res.join('\n'))

function calc(target) {
  let res = 0

  dfs(0, target)
  return res

  function dfs(sum, target) {
    for (let i = 1; i <= 3; i++) {
      if (sum + i > target) return

      if (sum + i == target) {
        res++
        return
      }

      dfs(sum + i, target)
    }
  }
}
