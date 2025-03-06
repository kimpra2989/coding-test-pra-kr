function solution(s) {
    let result = 1
    for (let i = 1; i < s.length; i++) {
        // i가 중심인 홀수
        let span = 1
        while (
            s[i - span] !== undefined &&
            s[i - span] === s[i + span]
        ) {
            span++
        }
        const len1 = 1 + (span - 1) * 2
        if (len1 > result) result = len1
        
        // i가 뒤인 짝수
        if (s[i-1] === s[i]) {
            const prev = i - 1
            const next = i
            let span = 1            
            while (
                s[next + span] !== undefined &&
                s[prev - span] === s[next + span]
            ) {
                span++
            }
            const len2 = 2 + (span - 1) * 2
            if (len2 > result) result = len2                
        }
    }

    return result;
}