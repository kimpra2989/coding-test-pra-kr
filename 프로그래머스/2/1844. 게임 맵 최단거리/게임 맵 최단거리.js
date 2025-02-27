function solution(maps) {
    const q = new Q()
    const visited = []
    for (let i = 0; i < maps.length; i++) {
        visited.push(new Array(maps[0].length).fill(false))
    }
    visited[0][0] = true
    
    q.push({len : 2, r : 0, c : 1})
    q.push({len : 2, r : 1, c : 0})
    
    return bfs() ?? -1
    
    function bfs () {
        while (q.length > 0) {
            let { len, r, c } = q.pop()
            
            if (r < 0 || r >= maps.length || c < 0 || c >= maps[0].length) continue
            if (visited[r][c] || !maps[r][c]) continue
            
            if (r == maps.length - 1 && c == maps[0].length - 1) return len

            visited[r][c] = true
            
            len++
            q.push({ len, r : r + 1, c })
            q.push({ len, r : r - 1, c })
            q.push({ len, r , c : c + 1 })
            q.push({ len, r , c : c - 1 })
        }
    }
}

class Q {
    constructor() {
        this.store = {};
        this.head = 0;
        this.tail = 0;
    }
    
    push (val) {
        this.store[this.tail++] = val;
    }
    
    pop () {
        const val = this.store[this.head];
        delete this.store[this.head];
        this.head++;
        return val;
    }

    get length() {
        return this.tail - this.head;
    }
}