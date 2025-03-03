function solution(n, words) {
    const shown = new Set()    
    shown.add(words[0])
    for (let i = 1; i < words.length; i++) {
        if (shown.has(words[i]) || words[i-1].at(-1) != words[i][0]) {
            return [(i+1) % n || n, Math.ceil((i+1) / n)]
        }
        shown.add(words[i])
    }
    return [0, 0]
}