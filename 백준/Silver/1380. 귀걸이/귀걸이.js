const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

let start = 0
let n = +input[start]
let scene = 1
while (n != 0) {
  const names = input.slice(start + 1, start + 1 + n)
  const apsu = new Set()
  for (let i = start + 1 + n; i < start + 3 * n; i++) {
    const student = input[i].split(' ')[0]
    if (apsu.has(student)) {
      apsu.delete(student)
    } else {
      apsu.add(student)
    }
  }

  for (const student of apsu) {
    console.log(scene + ' ' + names[student - 1])
  }

  start += 3 * n
  n = +input[start]
  scene++
}
