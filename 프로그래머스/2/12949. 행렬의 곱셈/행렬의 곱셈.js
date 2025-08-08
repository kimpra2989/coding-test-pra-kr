function solution(arr1, arr2) {
    const rows1 = arr1.length
    const cols2 = arr2[0].length
    
    const res = []
    
    for (let r = 0; r < rows1; r++) {
        const resRow = []
        const row = arr1[r]
        for (let c = 0; c < cols2; c++) {
            let sum = 0
            for (let i = 0; i < row.length; i++) {
                sum += row[i] * arr2[i][c]
            }
            
            resRow.push(sum)
        }
        
        res.push(resRow)
    }
    
    return res
}