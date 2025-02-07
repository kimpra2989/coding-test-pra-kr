/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = []

    function recursive_flat(arr, depth) {
        for (const ele of arr) {
            if (Array.isArray(ele)) {
                if (depth < n) {
                    recursive_flat(ele, depth + 1)
                    continue
                }
            }
            result.push(ele)
        }
        return result
    }

    return recursive_flat(arr, 0, n)
};
