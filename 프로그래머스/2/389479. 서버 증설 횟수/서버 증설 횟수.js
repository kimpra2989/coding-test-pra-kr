function solution(players, m, k) {
    const servers = new Array(24).fill(0)
    
    let result = 0
    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        const server = (servers[i] + 1) * m
        if (player >= server) {
            const added = Math.ceil((player - server) / m) + +((player - server) % m == 0) 
            for (let j = 1; j < k; j++) {
                if (i+j >= 24) break
                servers[i+j] += added
            }
            result += added
        }
    }
    return result;
}