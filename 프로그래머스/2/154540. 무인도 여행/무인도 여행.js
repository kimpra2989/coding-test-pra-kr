function solution(maps) {
    const visited = []
    for (let i = 0; i < maps.length; i++) {
        visited.push(new Array(maps[0].length).fill(false))
    }
    
    const result = []
    let sum = 0
    for (let r = 0; r < maps.length; r++) {
        for (let c = 0; c < maps[0].length; c++) {
            if (maps[r][c] !== 'X' && !visited[r][c]) {
                sum = 0
                dfs(r, c)
                result.push(sum)
            }
        }
    }
    
    return result.length ? result.sort((a, b) => a - b) : [-1]
    
    function dfs (r, c) {
        if (r < 0 || r >= maps.length || c < 0 || c >= maps[0].length) return 0
        if (maps[r][c] === 'X' || visited[r][c]) return 0

        visited[r][c] = true
        sum += +maps[r][c]
            
        dfs (r + 1, c)
        dfs (r - 1, c)
        dfs (r, c + 1)
        dfs (r, c - 1)
    }    
}