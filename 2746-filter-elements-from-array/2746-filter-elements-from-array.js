/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i]
      if (fn(ele, i)) result.push(ele)
    }
    
    return result
};