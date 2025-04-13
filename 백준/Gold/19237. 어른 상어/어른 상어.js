const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number))

const [n, m, k] = input[0]
const graph = input.slice(1, 1 + n)
const shark_dirs = input[n + 1]
const shark_priorities = [0]
for (let i = n + 2; i < input.length; i += 4) {
  shark_priorities.push([0, ...input.slice(i, i + 4)])
}

// [상어 방향, 상어 위치][]
const sharks = Array(m + 1)
for (let r = 0; r < n; r++) {
  for (let c = 0; c < n; c++) {
    const shark_num = graph[r][c]
    if (shark_num !== 0) {
      graph[r][c] = [shark_num, 0]
      sharks[shark_num] = [shark_dirs[shark_num - 1], [r, c]]
    }
  }
}

const shark_alive = new Array(m + 1).fill(true)
const dirs = [0, [-1, 0], [1, 0], [0, -1], [0, 1]]

let res = -1
for (let t = 1; t <= 1000; t++) {
  for (let s = 1; s <= m; s++) {
    if (!shark_alive[s]) continue

    const [shark_dir, [r, c]] = sharks[s]
    const shark_priority = shark_priorities[s][shark_dir]

    isTrapped = true
    for (const d of shark_priority) {
      const [dr, dc] = dirs[d]
      if (r + dr < 0 || r + dr >= n || c + dc < 0 || c + dc >= n) continue

      const next = graph[r + dr][c + dc]
      if (next === 0 || t > next[1] + k) {
        isTrapped = false
        sharks[s] = [d, [r + dr, c + dc]]

        break
      }
    }

    if (isTrapped) {
      for (const d of shark_priority) {
        const [dr, dc] = dirs[d]
        if (r + dr < 0 || r + dr >= n || c + dc < 0 || c + dc >= n) continue

        const next = graph[r + dr][c + dc]
        if (next[0] === s) {
          graph[r + dr][c + dc] = [s, t]
          sharks[s] = [d, [r + dr, c + dc]]

          break
        }
      }
    }
  }

  const visited = new Set()
  for (let s = 1; s <= m; s++) {
    if (!shark_alive[s]) continue

    const [r, c] = sharks[s][1]
    if (visited.has(r + ',' + c)) {
      shark_alive[s] = false
      continue
    }

    graph[r][c] = [s, t]
    visited.add(r + ',' + c)
  }

  let isAllDied = true
  for (let i = 2; i <= m; i++) {
    if (shark_alive[i]) {
      isAllDied = false
      break
    }
  }

  if (isAllDied) {
    res = t
    break
  }
}

console.log(res)
