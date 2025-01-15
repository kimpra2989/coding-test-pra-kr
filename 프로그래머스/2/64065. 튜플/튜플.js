function solution(s) {
    const x = 
        s
        .slice(2, -2)
        .split('\}\,\{')
        .map(ele => ele.split(',').map(Number))
        .sort((a, b) => a.length - b.length)
    console.log(x)
        
    const result = []
    let prev = new Set([])
    for (let set of x) {
        const cur = new Set(set)        
        const rest = diff(prev, cur)
        result.push(rest)   
        prev = cur
    }
    return result;
}

function diff (A, B) {
    for (let b of B) {
        if (!A.has(b)) return b
    }
}