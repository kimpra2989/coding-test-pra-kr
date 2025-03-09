function solution(n, k) {
    const targets = n.toString(k).split('0')
    return targets.map(isPrime).filter(x => x).length
}

function isPrime (n) {
    n = Number(n)
    if (n <= 2) return n == 2
    
    for (let d = 2; d <= Math.floor(n ** (1/2)); d++) {
        if (n % d == 0) return false
    }
    return true
}