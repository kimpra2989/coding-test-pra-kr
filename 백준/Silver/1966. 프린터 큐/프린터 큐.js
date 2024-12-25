const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
const [case_count, ...rest] = input

const result = []

for (let c = 0; c < case_count; c++) {
  const [file_count, target] = input[1 + 2 * c].split(' ')
  const files = input[1 + 2 * c + 1].split(' ').map(Number)

  const visited = Array(files.length).fill(false)
  const sorted = files.slice().sort((a, b) => b - a)
  let top_priority_idx = 0
  let idx = 0
  let count = 1
  while (true) {
    const i = idx % files.length
    if (!visited[i] && sorted[top_priority_idx] == files[i]) {
      if (i == target) {
        result.push(count)
        break
      }
      visited[i] = true
      top_priority_idx++
      count++
    }
    idx++
  }
}

console.log(result.join('\n'))
