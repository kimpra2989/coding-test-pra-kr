function solution(x, y, n) {
    if (x === y) return 0
    
    const memo = [new Set([x])]
    
    while (memo.at(-1).size) {
        const next = new Set()
        
        for (const val of memo.at(-1)) {        
            if (val * 3 === y || val * 2 === y || val + n === y) return memo.length
            if (val * 3 < y) {
                next.add(val * 3)
            } 
            if (val * 2 < y) {
                next.add(val * 2) 
            } 
            if (val + n < y) {
                next.add(val + n)
            }            
        }
        memo.push(next)
    }
    return -1    
}