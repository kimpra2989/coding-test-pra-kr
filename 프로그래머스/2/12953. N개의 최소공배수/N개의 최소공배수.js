function solution(arr) {
    let lcm = arr[0]
    for (let i = 1 ; i < arr.length; i++) {
        lcm = LCM(lcm, arr[i])
    }
    return lcm
}

function LCM (a, b) {
    let GCD = 1
    const min = Math.min(a, b)
    for (let i = min; i >= 0; i--) {
        if (a % i === 0 && b % i === 0) {
            GCD = i
            break
        }
    }
    
    return a * b / GCD
}