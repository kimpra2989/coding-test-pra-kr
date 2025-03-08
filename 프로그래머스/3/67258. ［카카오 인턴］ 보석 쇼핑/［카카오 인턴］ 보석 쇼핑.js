function solution(gems) {
    // 보석 종류 파악
    const kind = new Set(gems)
    const count = new Map()
    for (const gem of kind) {
        count.set(gem, 0)
    }
        
    // 투 포인터와 보석 개수 초기값
    let left = 0
    let right = kind.size - 1    
    for (const gem of gems.slice(0, right + 1)) {
        count.set(gem, count.get(gem) + 1)
    }
    const collect = new Set(gems.slice(0, right + 1))
       
    if (collect.size >= kind.size) return [left + 1, right + 1]
    
    const result = [1, gems.length]
    while (right < gems.length) {
        while (collect.size < kind.size) {
            right++
            if (right >= gems.length) break
            
            const gem = gems[right]
            count.set(gem, count.get(gem) + 1)
            collect.add(gem)
        }
        while (collect.size >= kind.size) {
            const gem = gems[left]
            count.set(gem, count.get(gem) - 1)
            if (count.get(gem) <= 0) collect.delete(gem)
            left++
        }
        
        if (result[1] - result[0] > right + 1 - left) {
            result[0] = left
            result[1] = right + 1
        }
    }
    
    return result
}