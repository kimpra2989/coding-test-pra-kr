const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, ...cs] = input

let res = ''
for (const c of cs) {
  let prefix // 숫자 앞 느낌표 개수
  let suffix // 숫자 뒤 느낌표 유무
  let num
  for (let i = 0; i < c.length; i++) {
    if (c[i] != '!') {
      num = c[i]
      prefix = i
      suffix = c[i + 1] !== undefined
    }
  }

  let sub = num == 0 && !suffix ? 0 : 1
  sub = (prefix & 1) == 0 ? sub : sub ^ 1

  res += sub + '\n'
}

console.log(res.trim())
