const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, c, ...graph] = input

const visited = new Array(n).fill(false)

dfs(1)

console.log(visited.filter((x) => x).length - 1)

function dfs(n) {
  if (visited[n]) return

  visited[n] = true

  const conneted = findConnectedComputers(n)

  for (let computer of conneted) {
    dfs(computer)
  }
}

function findConnectedComputers(from) {
  const connedted = graph
    .map((g) => g.split(' '))
    .filter((c) => c.some((x) => x == from))

  const computers = connedted.map(([a, b]) => (a == from ? b : a))

  return computers
}
