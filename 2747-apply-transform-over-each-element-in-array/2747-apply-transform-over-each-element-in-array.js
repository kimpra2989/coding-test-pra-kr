/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const result = []
  for (let i = 0 ; i < arr.length; i++) {
    const ele = arr[i]
    result.push(fn(ele, i))
  }  

  return result
};