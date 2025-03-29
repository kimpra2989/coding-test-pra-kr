function solution(tickets) {
    const adj = {}
    for (const ticket of tickets) {
        const [from, to] = ticket
        adj[from] = [...(adj[from] ?? []), to]
    }
    
    for (const key in adj) {
        adj[key].sort()
    }
    
    const visited = {}
    for (const key in adj) {
        visited[key] = adj[key].map(() => false)
    }
    
    const journey = ['ICN']
    let res
    dfs('ICN', 0)
    
    return res
    
    function dfs (node, depth) {
        if (depth >= tickets.length) {
            res = journey.slice()
            return true
        }
            
        for (let i = 0; i < (adj[node] ?? []).length; i++) {
            if (visited[node][i]) continue
            visited[node][i] = true
            journey.push(adj[node][i])
            if (dfs(adj[node][i], depth + 1)) return true
            journey.pop()
            visited[node][i] = false
        }
    }
}