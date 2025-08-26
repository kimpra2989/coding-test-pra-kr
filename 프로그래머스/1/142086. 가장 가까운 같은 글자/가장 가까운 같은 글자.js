function solution(s) {
    const shown = new Set()
    const loc = new Map()
    
    const result = Array(s.length).fill(-1)
    
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i]
        
        if (shown.has(char)) {
            const nextCharIdx = loc.get(char)
            const res = nextCharIdx - i
            result[nextCharIdx] = res
        }
        
        shown.add(char)
        loc.set(char, i)        
        
    }
    
    return result
}