class Q {
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

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const [n] = input[0].split(' ').map(Number)

if (n == 1) {
  console.log(1)
  process.exit(0)
}

const Vs = input.slice(1).map((s) => s.split(' ').map(Number))
const adj = Array.from({ length: n + 1 }, () => [])
const incomes = new Array(n + 1).fill(0)

for (const [from, to] of Vs) {
  adj[from].push(to)
  incomes[to] += 1
}

const q = new Q()
for (let i = 1; i <= n; i++) {
  if (incomes[i] == 0) q.push(i)
}

const res = []
while (q.length > 0) {
  const node = q.pop()
  res.push(node)

  const connected = adj[node]
  for (const n of connected) {
    incomes[n] -= 1

    if (incomes[n] == 0) {
      q.push(n)
    }
  }
}

console.log(res.join(' '))
