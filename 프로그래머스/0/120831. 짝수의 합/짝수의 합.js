function solution(n) {
    const generator = {}
    generator[Symbol.iterator] = function* () {
        let i = 0
        while (i * 2 <= n) {
            yield 2 * i++
        }
    }
    let sum = 0
    for (const num of generator) {
        sum += num
    }
    return sum    
}