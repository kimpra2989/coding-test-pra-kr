function solution(skill, skill_trees) {
    const skillMap = {}
    for (let i = 0; i < skill.length; i++) {
        const s = skill[i]
        skillMap[s] = i
    }
    
    let result = 0
    for (const st of skill_trees) {
        let step = 0
        let able = true
        for (const s of st) {
            if (s in skillMap){ 
                if (skillMap[s] != step) {
                    able = false
                    break
                } 
                step++
            } else continue
        }
        if (able) result++
    }
    
    return result;
}