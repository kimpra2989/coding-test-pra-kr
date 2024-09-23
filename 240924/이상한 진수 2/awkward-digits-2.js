const fs = require('fs')
const n = fs.readFileSync(0).toString()
let max = 0
const arrN = n.split('')
for (let i = 0; i < n.length; i++) {
    let copy = arrN.slice()
    copy[i] = copy[i] == 0 ? 1 : 0
    let x = parseInt(copy.join(''), 2)

    max = Math.max(max, x)
}
console.log(max)