// 제일 늦은 버스를 제일 늦게 타면 됨
function solution(n, t, m, timetable) {
    // 시간 순으로 정렬
    const times = timetable
                        .map(t => timeToMinute(t))
                        .sort((a, b) => a - b)
    
    const first_bus = timeToMinute("9:00")
    const last_bus = ['time', []]
    let start_idx = 0 
    for (let i = 1; i <= n; i++) {
        const bus_time = first_bus + t * (i - 1)
        let onBoard = 0
        if(i == n) last_bus[0] = bus_time
        
        for (let j = start_idx; j < times.length; j++) {
            if (times[j] <= bus_time) {
                if (i == n) last_bus[1].push(times[j])
                
                onBoard++
                if (onBoard >= m) {
                    start_idx += onBoard
                    break
                }
            } else { // 버스를 탈 수 있는 사람이 없는 경우
                start_idx += onBoard
                break
            }
        }
    }
    // console.log(last_bus)
    const [bus_time, crews] = last_bus
    if (crews.length < m) return minuteToTime(bus_time)
    
    return minuteToTime(crews.at(-1) - 1)
}

function timeToMinute(time) {
    const [hour, min] = time.split(':').map(Number)
    return hour * 60 + min
}

function minuteToTime(minute) {
    const hour = String(Math.floor(minute / 60)).padStart(2, '0')
    const min = String(minute % 60).padStart(2, '0')
    return hour + ':' + min
}