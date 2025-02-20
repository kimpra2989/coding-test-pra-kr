function solution(s) {
    let deleted0 = 0
    let count = 0
    
    while (s !== '1') {
        // 0 제거
        let deleted = 0
        for (const c of s) {
            if (c === '0') deleted++
        }
        deleted0 += deleted        
        
        // 10진수로
        s = (s.length - deleted).toString(2)
        count++
    }
    
    return [count, deleted0];
}