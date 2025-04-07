class UnionFind {
  constructor(length) {
    this.parent = Array.from({ length }, (_, i) => i)
    this.rank = Array(length).fill(0)
  }

  find(v) {
    if (v === this.parent[v]) return v

    return this.find(this.parent[v])
  }

  union(v1, v2) {
    const root1 = this.find(v1)
    const root2 = this.find(v2)

    if (root1 === root2) return false

    if (this.rank[root1] < this.rank[root2]) {
      this.parent[root1] = root2
    } else {
      this.parent[root2] = root1
    }
    return true
  }
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

let res = ''
for (let i = 0; i < input.length; i++) {
  const [E, V] = input[i].split(' ').map(Number)
  if (V === 0) break

  const Es = input.slice(i + 1, i + V + 1).map((x) => x.split(' ').map(Number))

  const total_dis = Es.reduce((acc, cur) => acc + cur[2], 0)
  Es.sort((a, b) => a[2] - b[2])

  const uf = new UnionFind(V)
  let mst = 0
  let diss = 0

  for (const [from, to, dis] of Es) {
    if (uf.union(from, to)) {
      mst++
      diss += dis

      if (mst === E - 1) break
    }
  }

  res += total_dis - diss + '\n'

  i += V
}

console.log(res.trim())
