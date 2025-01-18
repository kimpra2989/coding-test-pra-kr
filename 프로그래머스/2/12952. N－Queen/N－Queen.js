function solution(n) {
    const queens = []
    let answer = 0
    
    recursive(1)
    
    function recursive (row) {    
        for (let col = 1 ; col <= n ; col++) {
            if (row > n)  return answer++
            
            // validate
            if (queens.some(
                ([qRow, qCol]) =>
                    qRow === row || 
                    qCol === col ||
                    Math.abs(row - qRow) === Math.abs(col - qCol)
            )) continue            
            
            queens.push([row, col])
            recursive(row + 1)
            queens.pop()
        }
    }
    
    return answer;
}