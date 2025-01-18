const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, ...numbers] = input
const len = numbers[0].length

let result = len

for (let i = 1; i < len; i++) {
  let hash = new Map()
  let unique = true
  for (let number of numbers) {
    const part = number.slice(len - i)
    if (hash.has(part)) {
      unique = false
      break
    }
    hash.set(part, true)
  }

  if (unique) {
    result = i
    break
  }
}

console.log(result)
