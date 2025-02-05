/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    arr1.sort((a, b) => a.id - b.id)
    arr2.sort((a, b) => a.id - b.id)

    let idx = 0
    for (let i = 0; i < arr2.length; i++) {
        const obj = arr2[i]
        for (let j = idx; j < arr1.length; j++) {
            if (arr1[j].id === obj.id) {
                idx = j
                Object.assign(arr1[j], obj)
                break
            } else if (obj.id < arr1[j].id) {
                idx = j
                arr1.splice(j, 0, obj)
                break
            } else if (j >= arr1.length - 1) {
                arr1.push(obj)
            }
        }
    }
    return arr1
};