const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const solutions = input[1].split(' ').map(Number)

solutions.sort((a, b) => a - b)

let leftIdx = 0
let rightIdx = solutions.length - 1

let min = 2e9
let res
while (leftIdx < rightIdx) {
  const left = solutions[leftIdx]
  const right = solutions[rightIdx]

  const compound = left + right
  if (Math.abs(compound) < min) {
    min = Math.abs(compound)
    res = left + ' ' + right
  }

  if (compound > 0) rightIdx--
  else leftIdx++
}

console.log(res)
