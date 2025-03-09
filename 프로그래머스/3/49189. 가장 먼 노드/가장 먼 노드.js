function solution(n, edge) {
    const matrix = Array.from({ length : n }, () => [])
    
    for (const [from, to] of edge) {
        matrix[from - 1].push(to - 1)
        matrix[to - 1].push(from - 1)
    }
    
    let result = 0
    function bfs (node) {
        const q = new Q()
        q.push({ node, depth : 0 })
        const visited = new Set([node])
        let deepest = 0
        
        while (q.length > 0) {
            const { node, depth } = q.pop()
            if (depth > deepest) {
                deepest = depth
                result = 0
            }
            result++
            
            const lines = matrix[node]
            for (const line of lines) {
                if (!visited.has(line)) {
                    q.push({ node : line, depth : depth + 1})
                    visited.add(line)
                }
            }
        }
    }
    
    bfs (0)
    return result
}

class Q {
    constructor () {
        this.head = this.tail = 0
        this.s = {}
    }
    
    push (val) {
        this.s[this.tail++] = val
    }
    
    pop () {
        const val = this.s[this.head]
        delete this.s[this.head]
        this.head++
        return val
    }
    
    get length () {
        return this.tail - this.head
    }
}