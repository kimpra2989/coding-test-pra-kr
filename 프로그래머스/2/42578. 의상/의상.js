function solution(clothes) {
    const items = {}
    
    clothes.forEach(([_, category]) => {
        items[category] = items[category] ? items[category] + 1 : 1
    })
    
    return Object.values(items)
        .reduce((acc, cur) => acc * (cur + 1) , 1) - 1
}