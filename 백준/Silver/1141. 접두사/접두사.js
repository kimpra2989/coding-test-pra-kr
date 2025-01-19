const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const words = input.slice(1).sort((a, b) => b.length - a.length)

let result = 0
const dict = {}

for (const word of words) {
  let has = false
  let depth = dict
  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (!depth[char]) {
      depth[char] = {}
      if (i === word.length - 1) has = true
    }
    depth = depth[char]
  }

  if (has) result++
}

console.log(result)
