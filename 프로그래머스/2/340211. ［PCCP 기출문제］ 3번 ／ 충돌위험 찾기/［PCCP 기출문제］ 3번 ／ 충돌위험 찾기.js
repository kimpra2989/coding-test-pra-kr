function solution(points, routes) {
    let answer = 0
    
    // 시간에 따른 좌표 배열 만듦
    const positions = routes.map(route => {
        const result = [[...points[route[0] - 1]]]
        
        for (let i = 0; i < route.length - 1; i++) {
            const from = points[route[i] - 1].slice()
            const to = points[route[i+1] - 1].slice()
            
            while(JSON.stringify(from) != JSON.stringify(to)) {
                if (from[0] != to[0]) {
                    from[0] > to[0] ? from[0]-- : from[0]++
                } else {
                    from[1] > to[1] ? from[1]-- : from[1]++
                }
                result.push([...from])
            }            
        }
        return result    
    })
    
    // 로봇 하나 남는 경우 충돌이 없으니까 2개 이상 남아 있을 때에 
    // 같은 시간에 로봇이 같은 좌표에 있는 갯수를 구해서 결과에 추가
    const second = positions.map(p => p.length).sort().at(-2)
    for (let i = 0; i < second; i++) {
        // 특정 시간에 로봇의 위치배열
        const sametime = positions.map(position => position[i])
        // 위치에 있느 로봇 개수
        const position_map = {}
        // console.log(sametime)
        
        sametime.forEach(p => {
            if (p) {
                JSON.stringify(p) in position_map ?
                position_map[JSON.stringify(p)]++ :
                position_map[JSON.stringify(p)] = 1
            }
        })
        
        answer += Object.values(position_map)
                        .filter(x => x > 1)
                        .length
    }
    
    return answer;    
}