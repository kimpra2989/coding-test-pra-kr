function solution(enroll, referral, seller, amount) {
    const sell = amount.map(n => n * 100);
    const result = new Array(enroll.length).fill(0);
    
    const enroll_map = enroll.reduce((output, name, idx) => {
        output[name] = idx
        return output
    } , {})
    
    function dadandog(name, profit) {
        if (!profit) return
        
        const name_idx = enroll_map[name]
        const tossed_profit = Math.floor(profit / 10)  
        result[name_idx] += profit - tossed_profit
        
        if(referral[name_idx] !== '-') {
            dadandog(referral[name_idx], tossed_profit)
        }
    }
    
    seller.forEach((name, idx) => {
        dadandog(name, sell[idx])
    })
    
    return result
}