// .뺴고 제출
const input = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, ...map] = input.map((x) => x.split(''))

const res = [0]

for (let r = 0; r < map.length; r++) {
  for (let c = 0; c < map[0].length; c++) {
    if (map[r][c] == '.') continue

    // # => .
    map[r][c] = '.'
    if (is2phase(map)) {
      res[0] += 1
      res.push(`${r + 1} ${c + 1}`)
    }
    map[r][c] = '#'
  }
}

console.log(res.join('\n'))

function is2phase(map) {
  const visited = map.map((r) => r.map((c) => (c == '#' ? 0 : c)))
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[0].length; c++) {
      if (map[r][c] === '#') {
        // 1. 루프가 없어야함
        if (isLoop(r, c, 1)) return false

        // 2. 연결 되어있어야함함
        for (let r = 0; r < map.length; r++) {
          for (let c = 0; c < map[0].length; c++) {
            if (map[r][c] === '#' && !visited[r][c]) {
              return false
            }
          }
        }

        return true
      }
    }
  }

  function isLoop(r, c, depth) {
    visited[r][c] = depth

    for (const [dr, dc] of dirs) {
      const nextRow = r + dr
      const nextCol = c + dc
      
      if (
        nextRow >= 0 &&
        nextRow < map.length &&
        nextCol >= 0 &&
        nextCol < map[0].length &&
        map[nextRow][nextCol] === '#'
      ) {
        if (visited[nextRow][nextCol] === 0) {
          if (isLoop(nextRow, nextCol, depth + 1)) return true
        } else {
          if (visited[nextRow][nextCol] < depth - 1) return true
        }
      }
    }

    return false
  }
}
