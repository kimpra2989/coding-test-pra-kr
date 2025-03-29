function solution(files) {
    const parsed = []
        
    files.forEach((file, idx) => {
        const res = { idx }
        
        let numIdx = 0
        for (let i = 1; i < file.length; i++) {
            if (/[0-9]/.test(file[i])) {
                numIdx = i
                res['head'] = file.slice(0, numIdx).toLowerCase()
                break
            }
        }
        
        for (let i = numIdx + 1; i < Math.min(numIdx + 5, file.length); i++) {
            if (/[0-9]/.test(file[i]) == false) {
                res['num'] = +file.slice(numIdx, i)
                break
            }
        }
        if (!('num' in res)) res['num'] = +file.slice(numIdx, numIdx + 5)
        
        parsed.push(res)
    })
    
    parsed.sort((a, b) => 
        a.head === b.head ?
            a.num - b.num :
        a.head < b.head ?
            -1 : 1
    )
    
    return parsed.map(ele => files[ele['idx']])
}

function isNotNum (c) {
    return /^[a-zA-Z .-]$/.test(c)
}