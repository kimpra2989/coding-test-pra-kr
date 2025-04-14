function solution(relation) {
    const res = []
    
    const n = relation[0].length
    for (let k = 1; k <= n; k++) {
        const combination = combinations(n, k, res)
        
        for (const columns of combination) {
            if (unique_check(relation, columns)) {
                res.push(columns)
            }            
        }
    }
    
    return res.length
}
function combinations(n, k, excludes) {
    const res = []
    
    const combination = new Set()
    dfs (0)
    return res
    
    function dfs (start) {
        if (combination.size === k) {
            for (const exclude of excludes) {
                let isDup = true
                for (const ele of exclude) {
                    if (!combination.has(ele)) {
                        isDup = false
                        break
                    }
                }
                if (isDup) return                 
            }
            
            res.push(new Set([...combination]))
            return
        }
        
        for (let i = start; i < n; i++) {
            combination.add(i)
            dfs (i + 1)
            combination.delete(i)
        }
    }
}

function unique_check (relation, columns) {
    const shown = new Set()
    
    for (const row of relation) {
        let value = ''
        for (const col of columns) {
            value += row[col] + ','
        }
        if (shown.has(value)) {
            return false
        }
        shown.add(value)
    }
    
    return true
}
