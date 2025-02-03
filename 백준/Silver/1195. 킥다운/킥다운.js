const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [a, b] = input

const [long, short] = a.length > b.length ? [a, b] : [b, a]

let result = long.length + short.length

// 포함관계일 때
for (let i = 0; i + short.length <= long.length; i++) {
  const long_part = long.slice(i, i + short.length)

  if (isAllLT4(long_part, short)) {
    console.log(long.length)
    process.exit(0)
  }
}

// short이 우측으로 퇴장
for (let i = short.length - 1; i > 0; i--) {
  const long_rear = long.slice(-i)
  const short_front = short.slice(0, i)

  if (isAllLT4(long_rear, short_front)) {
    result = long.length + (short.length - i)
    break
  }
}

// short이 좌측으로 퇴장
for (let i = short.length - 1; i > 0; i--) {
  const long_front = long.slice(0, i)
  const short_rear = short.slice(-i)

  if (isAllLT4(long_front, short_rear)) {
    const newResult = long.length + (short.length - i)

    if (result > newResult) result = newResult

    break
  }
}

console.log(result)

function isAllLT4(s1, s2) {
  const len = s1.length

  for (let i = 0; i < len; i++) {
    if (+s1[i] + +s2[i] >= 4) {
      return false
    }
  }

  return true
}
