function solution(plans) {
    const res = []
    const ps = plans.map(p => [p[0], toMin(p[1]), +p[2]])
    ps.sort((a, b) => a[1] - b[1])
    const stack = [] // [{ name, time }]
    
    while (ps.length > 1) {
        let current = ps.shift()
        let untilNext = ps[0][1] - current[1]
        if (current[2] <= untilNext) {
            res.push(current[0])
            
            untilNext -= current[2]
            while(stack.length > 0 && untilNext > 0) {
                current = stack.pop()
                if (current[1] <= untilNext) {
                    untilNext -= current[1]
                    res.push(current[0])
                } else {
                    current[1] -= untilNext
                    stack.push(current)
                    break
                }
            }
        } else { // 다음 과제 이전에 못 끝낸 경우
            stack.push([current[0], current[2] - untilNext])
        }
    }
    res.push(
        ps[0][0], 
        ...stack.map(x => x[0])
                .reverse()
    )
    
    return res
}

function toMin(t) {
    const [h, m] = t.split(':').map(Number)
    
    return h * 60 + m
}