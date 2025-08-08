function solution(progresses, speeds) {
    const res = []
    let cur = 0
    
    while (cur < progresses.length) {
        let time = Math.ceil((100 - progresses[cur]) / speeds[cur])
        cur++
        
        let count = 1
        while (progresses[cur] + speeds[cur] * time >= 100) {
            count++
            cur++
        }
        
        res.push(count)

    }
    
    return res   
}