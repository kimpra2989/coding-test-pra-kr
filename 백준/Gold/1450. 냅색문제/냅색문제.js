const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const [[n, c], ws] = input.map((x) => x.split(' ').map(Number))
ws.sort((a, b) => a - b)

let res = 0
const cache = new Map()

getCases(ws, c)

console.log(res)

function getCases(weights, c) {
  const cacheKey = `${c}_${weights.length}`

  if (cache.has(cacheKey)) {
    res += cache.get(cacheKey)
    return
  }

  const oldRes = res

  // 단순 합으로 제한을 넘지 않는 경우를 처리
  let upperIdx = 0
  let sum = 0
  for (let i = 0; i < weights.length && sum <= c; i++) {
    sum += weights[i]
    if (sum <= c) {
      upperIdx++
    }
  }

  const partial = 1 << upperIdx
  res += partial

  // 더 넣을 수 없는 경우
  if (upperIdx == 0) {
    cache.set(cacheKey, partial)
    return
  }

  for (let i = upperIdx; i < weights.length; i++) {
    if (weights[i] <= c) {
      getCases(weights.slice(0, i), c - weights[i])
    }
  }

  const additionalCases = res - oldRes
  cache.set(cacheKey, additionalCases)
}
