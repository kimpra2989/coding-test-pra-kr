function solution(board, moves) {
    let answer = 0
    const store = []
    for (const move of moves.map(m => m-1)) {
        let idx = 0
        while (idx < board.length && board[idx][move] == 0) {
            idx++
        }
        if (idx >= board.length) continue
        
        if (store.at(-1) == board[idx][move]) {
            store.pop()
            answer++
        } else {
            store.push(board[idx][move])
        }
        board[idx][move] = 0
    }
    
    return answer * 2
}