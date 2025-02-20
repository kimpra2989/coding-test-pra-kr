function solution(n) {
    // 2진법으로
    const binary = n.toString(2)
    
    // 1의 개수 계산
    const count = count1(binary)
    
    for (let i = n + 1; i <= 10e6 ; i++) {
        if (count1(i.toString(2)) == count) return i        
    }    
}
    
function count1 (binary) {
    let count = 0
    for (const c of binary) {
        if(c === '1') count++
    }
    return count
}