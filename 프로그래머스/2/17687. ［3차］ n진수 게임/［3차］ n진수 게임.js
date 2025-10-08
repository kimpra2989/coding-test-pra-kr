function solution(n, t, m, p) {
    const lastTurn = p + m * (t - 1)
    let str = ''
    
    for (let i = 0; str.length < lastTurn ; i++) {
        const num = i.toString(n).toUpperCase()
        str += num
    }
    
    let res = ''
    for (let i = p - 1; i <= lastTurn; i += m) {
        res += str[i]
    }
    
    return res
}