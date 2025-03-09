function solution(orders, course) {
    // 교집합 배열 생성
    const orderSets = orders.map(order => new Set([...order]))
    const intersections = []
    for (let i = 0; i < orderSets.length; i++) {
        for (let j = i + 1; j < orderSets.length; j++) {
            const intersection = orderSets[i].intersection(orderSets[j])
            if (intersection.length >= course[0]) intersections.push(intersection)
        }
    }
    
    // course 길이에 맞는 문자열별 출현 횟수 계산
    const resultByCourse = Array.from({ length : course.length }, () => ({}))
    for (const intersection of intersections) {
        for (let i = 0; i < course.length; i++) {            
            if (intersection.length >= course[i]) {
                const words = wordGenerator(intersection, course[i])
                for (const word of words) {
                    resultByCourse[i][word] = resultByCourse[i][word] ? resultByCourse[i][word] + 1 : 1
                }
            }
        }        
    }
    
    // course별 가장 많이 나온 구성만 추가
    const result = []
    for (const res of resultByCourse) {
        const resArr = Object.entries(res)
        if (resArr.length == 0) continue
        
        resArr.sort((a, b) => b[1] - a[1])
        let max = resArr[0][1]
        for (const [key, val] of resArr) {
            if (val == max) result.push(key)
            else break
        }        
    }
    
    return result.sort()
}

Set.prototype.intersection = function (anotherSet) {
    const result = []
    for (const ele of anotherSet) {
        if (this.has(ele)) result.push(ele)
    }
    
    return result.sort()
}

function wordGenerator (base, length) {
    const result = []
    
    function dfs (word, start) {
        if (word.length >= length) {
            result.push(word)
            return
        }

        for (let i = start; i < base.length; i++) {
            dfs (word + base[i], i + 1)
        }
    }
    
    dfs ('', 0)
    return result
}