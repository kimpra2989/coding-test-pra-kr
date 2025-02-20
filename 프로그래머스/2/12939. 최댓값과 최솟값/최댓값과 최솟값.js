function solution(s) {
    const arr = s.split(' ').map(Number)
    
    // 대충 큰 값으로 초기화 (조건이 없음...)
    let min = 10e9
    let max = -10e9
    
    for (const v of arr) {
        if (v < min) min = v
        if (v > max) max = v
    }
    
    return min + ' ' + max
}