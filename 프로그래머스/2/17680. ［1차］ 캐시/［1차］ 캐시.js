function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5    
    const cache = []
    cities = cities.map(city => city.toUpperCase())
    
    let result = 0
    for (const city of cities) {
        const idx = cache.findIndex(c => c == city)
        if (idx == -1) {
            if (cache.length < cacheSize) {
                cache.push(city)
            } else {
                cache.shift()
                cache.push(city)
            }
            result += 5
        } else {
            cache.splice(idx, 1)
            cache.push(city)
            result++
        }
    }
    return result;
}