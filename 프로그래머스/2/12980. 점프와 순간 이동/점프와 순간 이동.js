function solution(n) {
    let count = 1
    
    while (n > 1) { 
        const isOdd = n & 1 == 1
        if (isOdd) {
            n--
            count++
        } else {
            n /= 2
        }
    }

    return count;
}