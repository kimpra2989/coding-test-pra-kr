class MinHeap {
  constructor() {
    this.heap = [null]
  }

  getParentIdx(idx) {
    return idx >> 1
  }

  push(val) {
    this.heap.push(val)
    this.heapifyUp(this.heap.length - 1)
  }

  pop() {
    if (this.length == 1) {
      return this.heap.pop()
    }

    const root = this.heap[1]
    const leaf = this.heap.pop()
    this.heap[1] = leaf
    this.heapifyDown(1)

    return root
  }

  swap(idx1, idx2) {
    ;[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  heapifyUp(idx) {
    const parentIdx = this.getParentIdx(idx)

    if (parentIdx > 0 && this.heap[idx][1] < this.heap[parentIdx][1]) {
      this.swap(idx, parentIdx)
      this.heapifyUp(parentIdx)
    }
  }

  heapifyDown(idx) {
    let minIdx = idx
    const leftIdx = idx << 1
    const rightIdx = (idx << 1) + 1

    if (
      this.length >= leftIdx &&
      this.heap[minIdx][1] > this.heap[leftIdx][1]
    ) {
      minIdx = leftIdx
    }

    if (
      this.length >= rightIdx &&
      this.heap[minIdx][1] > this.heap[rightIdx][1]
    ) {
      minIdx = rightIdx
    }

    if (minIdx != idx) {
      this.swap(idx, minIdx)
      this.heapifyDown(minIdx)
    }
  }

  get length() {
    return this.heap.length - 1
  }
}

console.time('total')
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = +input[0].split(' ')[0]
const Vs = input.slice(1).map((x) => x.split(' ').map(Number))
const adj = Array.from({ length: n + 1 }, () => [])

for (const V of Vs) {
  const [from, to, dis] = V
  const doubleDis = dis * 2
  adj[from].push([to, doubleDis])
  adj[to].push([from, doubleDis])
}

const disFox = dijkstraFox(n, adj)
const disWolf = dijkstraWolf(n, adj)

let res = 0
for (let i = 2; i < disFox.length; i++) {
  if (disFox[i] < disWolf[i]) res++
}
console.log(res)

function dijkstraFox(n, adj) {
  const minHeap = new MinHeap()
  const distances = new Array(n + 1).fill(Infinity)
  distances[1] = 0

  minHeap.push([1, 0])

  while (minHeap.length) {
    const [v, dis] = minHeap.pop()

    if (distances[v] < dis) continue

    for (const connected of adj[v]) {
      const [to, len] = connected
      const cost = dis + len
      if (distances[to] > cost) {
        minHeap.push([to, cost])
        distances[to] = cost
      }
    }
  }

  return distances
}

function dijkstraWolf(n, adj) {
  const minHeap = new MinHeap()
  const distances = Array.from({ length: n + 1 }, () => [Infinity, Infinity])

  // vertex, distance, isEvenDepth
  minHeap.push([1, 0, 1])

  while (minHeap.length) {
    const [v, dis, isEvenDepth] = minHeap.pop()
    if (distances[v][isEvenDepth] < dis) continue

    for (const connected of adj[v]) {
      let [to, len] = connected
      len = isEvenDepth ? len / 2 : len * 2
      const cost = dis + len
      if (distances[to][isEvenDepth ^ 1] > cost) {
        minHeap.push([to, cost, isEvenDepth ^ 1])
        distances[to][isEvenDepth ^ 1] = cost
      }
    }
  }

  const res = []
  for (const distance of distances) {
    res.push(Math.min(...distance))
  }
  return res
}
