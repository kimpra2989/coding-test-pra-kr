function solution(s){
    const stack = []
    for (let 괄호 of s) {
        if (괄호 == ')') {
            if (!stack[0]) return false
            stack.pop()
        } else {
            stack.push(괄호)
        }
    }
    
    if (stack.length > 0) return false
    return true
}