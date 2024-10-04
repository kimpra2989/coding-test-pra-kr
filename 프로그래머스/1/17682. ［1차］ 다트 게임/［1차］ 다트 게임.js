function solution(dartResult) {
    // 3개를 배열로 쪼개기
    const chunks = []    
    let start_idx = 0
    for (let i = 1; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            if (!isNaN(dartResult[i-1])) continue
            chunks.push(dartResult.slice(start_idx, i))
            start_idx = i
        }
    }
    chunks.push(dartResult.slice(start_idx))
    
    const points = []
    const bonus_map = { S : 1, D : 2, T : 3 }
    const option_map = { '*' : 2, '#' : -1 }
    for (const chunk of chunks) {
        const point =  chunk[1] != '0' ? +chunk[0] : 10
        const bonus = chunk[1] != '0' ? chunk[1] : chunk[2]
        const option = ['*', '#'].includes(chunk.at(-1)) ? chunk.at(-1) : null
        
        const p = point ** bonus_map[bonus] * (option_map[option] ?? 1)
        if (points.length > 0 && option == '*') {
            points[points.length-1] *= 2
        }
        points.push(p)
    }
    // console.log(points)
    
    let answer = 0
    points.forEach(p => {
        answer += p
    })
    
    return answer
}