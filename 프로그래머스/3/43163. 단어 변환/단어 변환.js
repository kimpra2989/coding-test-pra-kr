function solution(begin, target, words) {
    const q = new Q()
    const visited = new Set()
    
    q.push({ count : 0, word : begin })
    
    return bfs() ?? 0
    
    function bfs () {
        while (q.length > 0) {
            let { count, word } = q.pop()
            
            if (visited.has(word)) continue
            
            if (word == target) return count
            
            visited.add(word)
            const cans = findWords(word, words)
            
            count++            
            for (const can of cans) {
                q.push({ count, word : can})
            }
        }
    }
}

function findWords (target, words) {
    const result = []
    for (const word of words) {
        let diff = 0
        let diffOne = true
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== target[i]) diff++
            if (diff > 1) {
                diffOne = false
                break
            }
        }
        if (diffOne) result.push(word)        
    }
    return result
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