function solution(m, n, puddles) {
    const map = []
    for (let i = 0; i < n; i++) {
        map.push(new Array(m).fill(true))
    }
    map[0][0] = 1

    for (const [pcol, prow] of puddles) {
        map[prow - 1][pcol - 1] = 0
    }
    
    for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[0].length; c++) {
            if (r == 0 && c == 0 || map[r][c] === 0) continue
            map[r][c] = (map[r-1]?.[c] ?? 0) % 1000000007 + (map[r][c-1] ?? 0) % 1000000007
        }
    }
    
    return map[n - 1][m - 1] % 1000000007
}