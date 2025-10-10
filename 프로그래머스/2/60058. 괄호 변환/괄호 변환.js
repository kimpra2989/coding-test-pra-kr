function solution(p) {
    if (isRightSet(p)) return p
    
    return toRightBrakets(p)
}

function toRightBrakets(w) {
    if (w === '') return ''
    
    const { u, v } = divideW(w)
    
    if (isRightSet(u)) {
        return u + toRightBrakets(v)
    } else {
        let newW = `(${toRightBrakets(v)})`

        newW += u.slice(1, -1)
                 .split('')
                 .map(b => b === '(' ? ')' : '(')
                 .join('')
        
        return newW
    }
    
}

function divideW(w) {
    let open = 0
    let close = 0
    
    for (let i = 0; i < w.length; i++) {
        if (w[i] === '(') {
            open++
        } else {
            close++
        }
        
        if (open === close) {
            return { u : w.slice(0, i+1), v : w.slice(i+1)}
        }
    }
}

function isBalanced(w) {
    let open = 0
    
    for (let i = 0; i < w.length; i++) {
        if (w[i] === '(') open++
    }
    
    return open === w.length - open
}
    
function isRightSet(w) {
    let open = 0
    
    for (const b of w) {
        if (b === '(') open++
        else {
            if (open <= 0) {
                return false
            }
            open--
        }
    }
    
    return open === 0
}

