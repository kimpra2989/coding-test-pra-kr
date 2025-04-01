const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [[n], ...Es] = input.map((x) => x.split(' ').map(Number))

const graph = Array.from({ length: n }, (_, i) => Array(i).fill(Infinity))

for (const E of Es) {
  let [from, to, dis] = E
  if (from < to) [from, to] = [to, from]

  graph[from][to] = dis
}

// default 최소 거리
const minDistances = getMinDistance(graph)

// // Edge 하나 씩 지워보기
const res = []
for (const E of Es) {
  let [from, to, dis] = E
  if (from < to) [from, to] = [to, from]

  if (minDistances[from][to] < graph[from][to]) {
    res.push(0)
    continue
  }

  graph[from][to] = Infinity
  const distances = getMinDistance(graph)

  let count = 0
  for (let i = 0; i < minDistances.length; i++) {
    for (let j = 0; j < minDistances[i].length; j++) {
      if (distances[i][j] > minDistances[i][j]) count++
    }
  }
  res.push(count)

  graph[from][to] = dis
}

console.log(res.join(' '))

function getMinDistance(graph) {
  const minDistances = []
  for (const row of graph) {
    minDistances.push(row.slice())
  }

  for (let k = 0; k < n; k++) {
    for (let a = 0; a < n - 1; a++) {
      if (a == k) continue
      if (minDistances[Math.max(a, k)][Math.min(a, k)] === Infinity) continue

      for (let b = a + 1; b < n; b++) {
        if (b == k) continue
        if (minDistances[Math.max(b, k)][Math.min(b, k)] === Infinity) continue

        const cost =
          minDistances[Math.max(a, k)][Math.min(a, k)] +
          minDistances[Math.max(b, k)][Math.min(b, k)]
        minDistances[b][a] = Math.min(cost, minDistances[b][a])
      }
    }
  }

  return minDistances
}
