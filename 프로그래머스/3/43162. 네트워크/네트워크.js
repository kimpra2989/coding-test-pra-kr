function solution(n, computers) {
    let count = 0
    const visited = new Set()
    
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i)
            count++
        }
    }
    
    function dfs(idx) {
        if (visited.has(idx)) return
        
        visited.add(idx)
        
        const com = computers[idx]
        for (let i = 0; i < com.length; i++) {
            if (com[i] == 1) dfs(i)
        }
    }
    
    return count;
}