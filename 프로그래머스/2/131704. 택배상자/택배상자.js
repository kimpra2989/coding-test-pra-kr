function solution(order) {
    const stack = []
    let target = 0
    for (let i = 1 ; i <= order.length ; i++) {
        if (i != order[target]) {
            stack.push(i)
            continue
        } else {
            target++
            while (stack[0] && stack.at(-1) == order[target]) {
                stack.pop()
                target++
            }
            continue
        }
    }
    return target
}