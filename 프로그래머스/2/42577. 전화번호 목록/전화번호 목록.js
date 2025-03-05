function solution(phone_book) {
    phone_book.sort().reverse()
    const trie = {}
    for (const num of phone_book) {
        let parent = trie
        for (const char of num) {
            if (!parent[char]) parent[char] = {}
            parent = parent[char]
        }
        if (Object.values(parent).length > 0) return false
    }
    return true
}