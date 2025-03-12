function solution(n, left, right) {
    left = toPoint(left)
    right = toPoint(right)
    
    if (left[0] == right[0]) {
        const r = left[0]
        const result = []
        for (let c = left[1]; c <= right[1]; c++) {
            result.push(c <= r ? r + 1 : c + 1)
        }
        return result
    } else {
        const result = []
        const rs = left[0]
        for (let c = left[1]; c < n; c++) {
            result.push(c <= rs ? rs + 1 : c + 1)
        }

        const re = right[0]
        for (let r = rs + 1; r < re; r++) {
            for (let c = 0; c < n; c++) {
                result.push(c <= r ? r + 1 : c + 1)
            }
        }
            
        for (let c = 0; c <= right[1]; c++) {
            result.push(c <= re ? re + 1 : c + 1)
        }
        
        return result
    }
    
    function toPoint(idx) {
        const row = Math.floor(idx / n)
        const col = idx - n * row
        return [row, col]
    }
}

