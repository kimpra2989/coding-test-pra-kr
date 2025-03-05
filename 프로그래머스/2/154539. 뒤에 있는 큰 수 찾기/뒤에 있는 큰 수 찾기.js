function solution(numbers) {
    const stack = []
    
    const result = new Array(numbers.length).fill(-1)
    for (let i = numbers.length - 1; i >=0; i--) {
        const number = numbers[i]
        if (stack.length == 0) {
            stack.push(number)
            continue
        }
        
        while (stack.length > 0 && number >= stack.at(-1)) stack.pop()
        if (stack.length > 0) result[i] = stack.at(-1)
        stack.push(number)
    }
    return result;
}