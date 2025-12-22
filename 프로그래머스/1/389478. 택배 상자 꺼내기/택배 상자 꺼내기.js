function solution(n, w, num) {
    function loc(n) {
        const r = Math.floor((n-1) / w)
        let c = (n-1) % w
        if (r % 2 == 1) c = w-1-c
        
        return { r, c }
    }
    
    const target_loc = loc(num)
    let top = n
    while (target_loc.c != loc(top).c) top--
    
    return loc(top).r - target_loc.r + 1
}