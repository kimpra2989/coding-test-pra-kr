function solution(n) {
    const result = []
    
    while (n != 0) {
        const spare = n % 3 || 3
        result.push(spare)
        n = (n - spare) / 3
    }
    return result
            .reverse()
            .map(n => n == 3 ? 4 : 
                     (n == 1 ? 1 : 2)
            )
            .join('')
}