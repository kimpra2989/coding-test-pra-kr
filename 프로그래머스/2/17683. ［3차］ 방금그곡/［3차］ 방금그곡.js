function solution(m, musicinfos) {
    const targets = []    
    for (const musicinfo of musicinfos) {
        const [start, end, title, cords] = musicinfo.split(',')
        // 코드로 분해해서 배열로 만듦
        const parsedCords = cordParser(cords)
        // 시간을 통해 반복 횟수 계싼
        const playingTime = toMin(end) - toMin(start)
        let music = []
        for (let i = 0; i < Math.floor(playingTime / parsedCords.length); i++) {
            music = music.concat(parsedCords)
        }
        music = music.concat(parsedCords.slice(0, playingTime % parsedCords.length))
        // substring에 곡이 있는지 확인
        const parsedM = cordParser(m)
        for (let i = 0; i + parsedM.length <= music.length; i++) {
            if (music.slice(i, i + parsedM.length).join('') === m) {
                targets.push({ playingTime, title })
                break
            }
        }
    }
    // 조건에 맞는 것 선별
    if (targets.length == 0) return '(None)'
    
    targets.sort((a, b) => b.playingTime - a.playingTime)

    return targets[0].title
}

function cordParser(cords) {
    const result = []
    for (let i = 0; i < cords.length; i++) {
        let cord = cords[i]
        if (cords[i + 1] === '#') {
            cord += '#'
            i++
        }
        result.push(cord)
    }
    
    return result
}

function toMin(time) {
    const [hh, mm] = time.split(':').map(Number)
    return hh * 60 + mm
}