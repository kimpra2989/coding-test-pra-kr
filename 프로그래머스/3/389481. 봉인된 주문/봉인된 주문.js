function solution(n, bans) {
    const banIdxs = bans.map(spellToIdx)
    banIdxs.sort((a, b) => a - b)
    
    // 주문 상의 위치 1-indexed
    let idx = n
    for (const banIdx of banIdxs) {
        if (idx < banIdx) break
        idx++
    }
    
    // idx를 통해 주문으로 변환
    let num = idx
    return idxToSpell(num)
}

function spellToIdx (ban) {
    let val = 0
    for (let digit = 0; digit < ban.length; digit++) {
        const num = ban.at(-(digit + 1))
        
        val += (num.charCodeAt(0) - 'a'.charCodeAt(0) + 1) * (26 ** digit)
    }
    return val
}

function idxToSpell (idx) {
    let result = []
    while (idx > 0) {
        const spare = idx % 26 || 26
        result.push(String.fromCharCode(('a'.charCodeAt(0) - 1) + spare))
        idx = (idx -spare) / 26
    }
    return result.reverse().join('')    
}