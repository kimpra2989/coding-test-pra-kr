function solution(numbers) {
    const numsHolds = {}
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        numsHolds[number] = (numsHolds[number] ?? 0) + 1
    }
    
    const compounds = new Set()
    const used = Object.fromEntries(Object.entries(numsHolds).map(x => {
            x[1] = 0
            return x
            })
        )
    // used : { 1 : 0, 7 : 0 }
    
    dfs('', used)
    
    let res = 0
    for (const num of compounds) {
        if (isPrime(num)) res++
    }
    return res
    
    function dfs (num, used) {
        if (num !== '') compounds.add(+num)
        
        for (const key in numsHolds) {
            if (used[key] < numsHolds[key]) {
                used[key] += 1
                dfs (num + key, used)
                used[key] -= 1
            }
        }
    }
}

function isPrime (n) {
    if (n <= 1) return false
    if (n <= 3) return true
    
    for (let d = 2; d ** 2 <= n; d++) {
        if (n % d === 0) return false
    }
    
    return true
}