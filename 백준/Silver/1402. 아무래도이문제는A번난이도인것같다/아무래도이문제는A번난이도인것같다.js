const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = input[0]

for (let i = 0; i < n; i++) console.log('yes')
