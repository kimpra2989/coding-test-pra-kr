function solution(elements) {
    const res = new Set()
    const len = elements.length
    
    for (let startIdx = 0; startIdx < len; startIdx++) {
        let sum = 0
        let count = 0
        while (count < len - 1) {
            sum += elements[(startIdx + count) % len]
            res.add(sum)
            count++
        }
    }
    
    return res.size + 1
    
}