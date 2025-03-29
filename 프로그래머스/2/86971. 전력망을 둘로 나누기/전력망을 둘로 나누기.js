function solution(n, wires) {
    const adj = Array.from({ length : n + 1 }, () => new Set())
    for (const wire of wires) {
        const [from, to] = wire
        adj[from].add(to)
        adj[to].add(from)
    }
    
    let res = n
    for (const cut of wires) {
        const [from, to] = cut
        adj[from].delete(to)
        adj[to].delete(from)
        res = Math.min(res, search(adj, n))
        adj[from].add(to)
        adj[to].add(from)
    }
    
    return res
    
    function search (adj, n) {
        let res = []
        const visited = new Set()
        
        for (let i = 1; i <= n; i++) {
            const count = countNodes(i)
            if (count) res.push(count)
        }
        
        return Math.abs(res[1] - res[0])
        
        function countNodes (node) {
            let count = 0
            dfs (node)
            return count
            
            function dfs (node) {
                if (visited.has(node)) return 
                
                visited.add(node)
                count++
    
                for (const n of adj[node]) {
                    dfs (n)
                }
            }
        }
    }
}