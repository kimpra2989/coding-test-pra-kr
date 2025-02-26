function solution(n) {
    let before = 0
    let current = 1
    
    for (let i = 2; i <= n; i++) {
        [before, current] = [current, (before + current) % 1234567]
    }
    return current;
}