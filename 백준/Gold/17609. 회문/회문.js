const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const tests = input.slice(1)
let result = ''

for (const test of tests) {
  let head = 0
  let tail = test.length - 1

  let pushed = false
  let notPal = false
  while (head < tail) {
    // 회문 아닌 경우
    if (test[head] !== test[tail]) {
      if (
        isPal(test.slice(head + 1, tail + 1)) ||
        isPal(test.slice(head, tail))
      ) {
        result += '1\n'
      } else {
        result += '2\n'
      }
      break
    }

    head++
    tail--
  }

  if (head >= tail) {
    result += '0\n'
  }
}

function isPal(word) {
  let head = 0
  let tail = word.length - 1

  while (head < tail) {
    if (word[head] !== word[tail]) return false
    head++
    tail--
  }
  return true
}

console.log(result)