// 최초로 0인 비트가 나오는 위치를 1로 바꾸고 그 밑의 자리수를 0으로 
function solution(numbers) {
    const result = []
    for (let num of numbers) {
        // 1의 자리가 0
        if ((num & 1) == 0) {
            result.push(num + 1)
            continue
        }

        // 최초로 0인 비트의 자리수 찾기
        const b = num.toString(2)
        let first0 = b.length
        for (let i = 0; i < b.length; i++) {
            if (b.at(-(i+1)) == 0) { 
                first0 = i
                break
            }
        }
        result.push(num + 2 ** first0 - 2 ** (first0 - 1))
    }
    return result
}
