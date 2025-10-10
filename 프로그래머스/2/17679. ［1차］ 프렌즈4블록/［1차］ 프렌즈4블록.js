function solution(m, n, board) {
    board = board.map(r => r.split(''))
    let res = 0
    let prev = 0
    do { 
        prev = res
        res += pop(board)
        fall(board)
    } while (prev !== res)

    return res
}

function pop(board) {
    let popCount = 0
    const rows = board.length
    const cols = board[0].length
    const seen = Array.from({ length : rows }, () => Array(cols).fill(false))
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (seen[r][c] || board[r][c] === '') continue
            
            const sameBlocks = dfs (r, c, board[r][c], [])
            if (sameBlocks.length < 4) continue
            
            sameBlocks.sort(
                ([r1, c1], [r2, c2]) => r1 === r2 ? 
                                        c1 - c2 :
                                        r1 - r2
            )
            
            const ds = [[1, 0], [0, 1], [1, 1]]
            for (let i = 0; i + 3 < sameBlocks.length; i++) {
                const target = sameBlocks[i]
                
                const isSquare = sameBlocks
                                    .slice(i+1)
                                    .filter(([x, y]) => {
                                        for (const [dx, dy] of ds) {
                                            if (target[0] + dx === x &&
                                                target[1] + dy === y) {
                                                return true
                                            }
                                        }
                                        return false
                                    })
                                    .length === 3
                if (isSquare) {
                    popCount += applyPopToBoard(board, ...target)
                }
            }
        }
    }
    
    return popCount
    
    function dfs(r, c, block, sameBlocks) {
        seen[r][c] = true
        sameBlocks.push([r, c])
        
        for (const [dr, dc] of dirs) {
            const nextR = r + dr
            const nextC = c + dc
            if (
                0 <= nextR && nextR < rows &&
                0 <= nextC && nextC < cols &&
                !seen[nextR][nextC] && 
                board[nextR][nextC] === block) {
                dfs(nextR, nextC, block, sameBlocks)
            }
        }
        
        return sameBlocks
    }
    
    function applyPopToBoard(board, r, c) {
        let popCount = 0
        const diffs = [[0, 0], [1, 0], [0, 1], [1, 1]]
        
        for (const [dr, dc] of diffs) {
            if (board[r+dr][c+dc] !== '') {
                board[r+dr][c+dc] = ''
                popCount++
            }   
        }
        
        return  popCount
    }
}

function fall(board) {
    const rows = board.length
    const cols = board[0].length

    for (let r = rows - 1; r >= 0; r--) {
        for (let c = 0; c < cols; c++) {
            const current = board[r][c]
            if (current === '') {
                for (let upperR = r - 1; upperR >=0; upperR--) {
                    const upper = board[upperR][c]
                    if (upper !== '') {
                        board[r][c] = upper
                        board[upperR][c] = ''
                        break
                    }
                }
            }
        }
    }
}