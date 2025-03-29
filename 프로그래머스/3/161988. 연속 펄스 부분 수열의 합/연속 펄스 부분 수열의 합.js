function solution(sequence) {
    // 곱하고 생각
    sequence = sequence.map((a, i) => (i & 1) == 0 ? -a : a )
    let res = -5e10
    
    let sum = 0
    // kadane
    // 양수인 경우
    for (const num of sequence) {
        sum = Math.max(0, sum + num)
        res = Math.max(res, sum)
    }
    
    // 음수
    sum = 0
    for (const num of sequence) {
        sum = Math.min(0, sum + num)
        res = Math.max(res, -sum)
    }
    return res
}