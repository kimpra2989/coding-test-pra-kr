/* 브래인 스토밍...
** 1. 모든 문제를 풀 수 있는 최종 스팩?
** 2. 경우를 다 해봐야하는 거 아닌가??...
** 3. 명상해서 다음 문제 풀기 vs 같은 문제 풀기 => 이걸 다 해봐야한다는 거임
** 4. 확실히 손해인 선택지가 있을까? (기대치 이상의 명상, 여러 문제 중 상위 호환 등)
** 5. 입력값 제한 조건이 작은 걸로 봐서 최적화는 생각보다 신경 안 써도 될 듯
** 6. 최악의 경우가 명상 300번
----------------------------
** 1. 가만보니 경로 문제 같아보이는데? 
** 2. 0.0에서 목표까지 각점에 대해 최단 거리를 갱신해 나간다면?
** 3. 목표까지를 영역으로 지정하고 [0, 0] [0, 1]...[0. goal] 순서로?
** 4. 복잡도 예상 : 150 * 150 * 100 = 200만
*/  

function solution(alp, cop, problems) {
    // 목표 구하기
    const goal = problems
                    .map(p => p.slice(0, 2))
                    .reduce(([maxA, maxB], [a, b]) => 
                        [Math.max(maxA, a), Math.max(maxB, b)]
                     , [alp, cop]) // 초기 위치를 초기 능력치 이후로 보정
    
    // [alp][cop] 형태로 동작하는 2차원 배열 만들어보자
    const stat = Array.from(new Array(goal[0] + 1), (_, i) => new Array(goal[1] + 1).fill(false)) // alp, cop으로 배열에 접근할 수 있도록 길이 설정
    for (let i = 0; i < stat.length; i++) {
        if (i < alp) continue
        for (let j = 0; j < stat[0].length; j++) {
            if (j < cop) continue
            stat[i][j] = (i - alp) + (j - cop)
        }
    }
    // console.log(stat)

    // [0][0]부터 차례로 돌면서 최단시간을 구해나감
    for (let i = alp; i < goal[0] + 1; i++) {
        for (let j = cop; j < goal[1] + 1; j++) {
            if (stat[i][j] === false) continue
            
            problems.forEach(problem => {
                const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problem
                
                const solvable = i >= alp_req && j >= cop_req
                if (solvable) {
                    // 경계를 빠져나갔을 경우에 대한 예외처리
                    const target_alp = Math.min(i + alp_rwd, goal[0])
                    const target_cop = Math.min(j + cop_rwd, goal[1])
                    
                    stat[target_alp][target_cop] = Math.min(stat[target_alp][target_cop], stat[i][j] + cost)
                }
            })
        }
    }
    
    // console.log(stat)    
    return stat[goal[0]][goal[1]]
}