function solution(sequence, k) {
    let sum = 0
    for (const a of sequence) {
        sum += a
    }
    
    let left = 0
    let right = sequence.length - 1
    
    while (true) {
        if (sum == k) {
            while (left > 0 && sequence[left-1] === sequence[right]) {
                left--
                right--
            }
            return [left, right]
        } else if (sum > k) {
            sum -= sequence[left]
            left++
        } else {
            sum -= sequence[right]
            right--
            while (sum < k) {        
                left--
                sum += sequence[left]
            }            
        }
    }
}