class Queue {
  constructor() {
    this.store = {}
    this.head = this.tail = 0
  }

  push(val) {
    this.store[this.tail++] = val
  }

  pop() {
    const val = this.store[this.head]
    delete this.store[this.head++]
    return val
  }

  get length() {
    return this.tail - this.head
  }
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = +input[0]

const q = new Queue()

for (let i = 1; i <= n; i++) {
  q.push(i)
}

while(q.length > 1) {
  q.pop()
  q.push(q.pop())
}

console.log(q.pop())