function solution(video_len, pos, op_start, op_end, commands) {
    
    let pos_sec = timeToSec(pos)
    
    for (const command of commands) {
        if (timeToSec(op_start) <= pos_sec && 
            pos_sec <= timeToSec(op_end)) {
            pos_sec = timeToSec(op_end)
        }
            
        if (command == 'next') {
            pos_sec = Math.min(timeToSec(video_len), pos_sec + 10)
        } else {
            pos_sec = Math.max(0, pos_sec - 10)
        }
        
        if (timeToSec(op_start) <= pos_sec && 
            pos_sec <= timeToSec(op_end)) {
            pos_sec = timeToSec(op_end)
        }
    }
    
    const m = String(Math.floor(pos_sec / 60)).padStart(2, '0')
    const s = String(pos_sec % 60).padStart(2, '0')
    return m + ':' + s
}
    
function timeToSec(time) {
    const [m, s] = time.split(':').map(Number)
    return m * 60 + s
}