function solution(picks, minerals) {
    // 쓸 수 있는 곡갱이 선별
    const neededPicks = Math.ceil(minerals.length / 5)
    let totalPicks = picks.reduce((acc, cur) => acc + cur, 0)
    if (totalPicks > neededPicks) {
       let total = 0
       const result = new Array(3).fill(0)
       for (let i = 0; i < 3; i++) {
           const pick = picks[i]
           const subTotal = Math.min(neededPicks - total, pick)
           total += subTotal
           result[i] = subTotal
           if (total >= neededPicks) break
       }
        picks = result
    }
    
    // 5개의 광물 범위 별 사용할 곡갱이의 조합 생성
    const orders = combination(picks)
    
    // 계산
    let result = 10e5
    for (const order of orders) {    
        let total = 0
        for (let i = 0; i < order.length; i++) {
            const part = minerals.slice(i * 5, (i * 5) + 5)
            const pick = order[i]
            if (pick === 'dia') {
                total += part.length
            } else if (pick === 'iron') {
                part.forEach(m => {
                    if (m === 'diamond') {
                        total += 5
                    } else total++
                })
            } else {
                part.forEach(m => {
                    if (m === 'diamond') {
                        total += 25
                    } else if (m === 'iron') {
                        total += 5
                    } else total++
                })
            }
        }
        if (total < result) result = total
    }
    return result            
}

function combination (picks) {
    const result = []
    
    const kind = ['dia', 'iron', 'stone']
    const order = []
    function dfs (dia, iron, stone) {
        if (
            dia >= picks[0] &&
            iron >= picks[1] &&
            stone >= picks[2]
        ) {
            result.push(order.slice())
            return
        }
        
        for (const pick of kind) {
            order.push(pick)
            if (pick === 'dia' && dia < picks[0]) {
                dfs(dia + 1, iron, stone)
            } else if (pick === 'iron' && iron < picks[1]) {
                dfs(dia, iron + 1, stone)
            } else if (pick === 'stone' && stone < picks[2]) {
                dfs(dia, iron, stone + 1)
            }
            order.pop()
        }
    }
    
    dfs(0, 0, 0)
    return result
}
