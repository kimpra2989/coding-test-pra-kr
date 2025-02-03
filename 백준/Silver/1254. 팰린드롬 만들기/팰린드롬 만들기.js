const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const s = input

for (let i = 0; i < s.length; i++) {
  const part = s.slice(i)
  if (isPel(part)) {
    console.log(s.length + (s.length - part.length))
    process.exit(0)
  }
}

function isPel(str) {
  return str.split('').reverse().join('') === str
}
