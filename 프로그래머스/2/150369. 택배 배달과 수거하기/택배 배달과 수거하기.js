// 배달과 픽업 중 0이 아닌 제일 먼 거리의 총합
function solution(cap, n, deliveries, pickups) {
    var answer = 0
    
    rtrim0(deliveries)    
    rtrim0(pickups)
    let distance = Math.max(deliveries.length, pickups.length)

    while (distance > 0) {
        answer += distance
        
        // console.log('b', deliveries, pickups)
        op(deliveries)
        op(pickups)
        // console.log('a', deliveries, pickups)
        
        distance = Math.max(deliveries.length, pickups.length)
    }
    
    function op(arr) {
        let sub = 0
        let isEnd = true
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 0) continue
            
            if (sub + arr[i] >= cap) {
                arr[i] -= cap - sub
                rtrim0(arr)
                isEnd = false
                break
            }
        sub += arr[i]
        arr[i] = 0
        }
        
        if (isEnd) arr.splice(0)
    }
    
    return answer * 2
}

function rtrim0 (arr) {
    let count = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            count++
        } else break
    }
    arr.splice(arr.length - count)
}