/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    console.log(char)
    switch (char) {
      case 'M': sum += 1000; break
      case 'D': sum += 500; break
      case 'L': sum += 50; break
      case 'V': sum += 5; break      
      case 'C':
        switch (s[i + 1]) {
          case 'M':
            sum += 500
          case 'D':
            sum += 400
            i++
            break
          default: sum += 100
        }
        break
      case 'X':
        switch (s[i + 1]) {
          case 'C':
            sum += 50
          case 'L':
            sum += 40
            i++
            break
          default: sum += 10
        }
        break
      case 'I':
        switch (s[i + 1]) {
          case 'X':
            sum += 5
          case 'V':
            sum += 4
            i++
            break
          default: sum += 1
        }
        break
    }
  }
  return sum
};