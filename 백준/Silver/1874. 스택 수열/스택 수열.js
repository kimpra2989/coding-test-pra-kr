const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...rest] = input;
const seq = rest.map(Number);

let result = [];
let stack = [];
let idx = 0; // 현재 스택에 추가된 최대 숫자

for (let a of seq) {
  if (idx < a) {
    for (let i = idx + 1; i <= a; i++) {
      stack.push(i);
      result.push('+');
    }
    idx = a; // idx 갱신
  }

  if (stack.pop() !== a) {
    console.log('NO');
    return;
  }

  result.push('-');
}

console.log(result.join('\n'));
