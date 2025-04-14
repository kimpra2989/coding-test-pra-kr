const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number))

const nums = new Set(input[1])

const targets = input[3]

let val = ''
for (const target of targets) {
  val += +nums.has(target) + '\n'
}

console.log(val.trim())