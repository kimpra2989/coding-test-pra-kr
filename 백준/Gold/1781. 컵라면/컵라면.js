class Heap {
  constructor(sort = (a, b) => a - b) {
    this.heap = [null]
    this.sort = sort
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

    if (parentIdx > 0 && this.sort(this.heap[idx], this.heap[parentIdx]) < 0) {
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
      this.sort(this.heap[leftIdx], this.heap[minIdx]) < 0
    ) {
      minIdx = leftIdx
    }

    if (
      this.length >= rightIdx &&
      this.sort(this.heap[rightIdx], this.heap[minIdx]) < 0
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

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [n, ...ps] = input.map((x) => x.split(' ').map(Number))

// 데드라인 순으로 정렬
ps.sort((a, b) => a[0] - b[0])

const firstDaadline = ps[0][0]
let res = 0

const maxHeap = new Heap((a, b) => b - a)

let prevDeadline = ps.at(-1)[0] + 1
while (ps.length) {
  const [newDeadline, point] = ps.pop()

  if (prevDeadline != newDeadline) {
    for (let i = 1; i < prevDeadline - newDeadline && maxHeap.length > 0; i++) {
      res += maxHeap.pop()
    }
  }

  maxHeap.push(point)

  // 이번 데드라인의 점수 모두 추가
  for (let i = ps.length - 1; i >= 0; i--) {
    const [deadline, point] = ps[i]

    if (newDeadline !== deadline) {
      break
    }

    maxHeap.push(point)
    ps.pop()
  }

  if (firstDaadline == newDeadline) break

  // 데드라인의 차이 만큼 반복해서 최대값 추출
  res += maxHeap.pop()

  prevDeadline = newDeadline
}

// 사장 작은 데드라인이면 모든 남은 것 중 최대 추출
for (let i = 0; i < firstDaadline && maxHeap.length > 0; i++) {
  res += maxHeap.pop()
}
console.log(res)
