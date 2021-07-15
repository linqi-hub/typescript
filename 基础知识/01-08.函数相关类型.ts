// function add(first: number, second: number): number {
//   return first + second;
// }

// 函数的返回值为空void
// function sayHello(): void {
//   console.log('hello');
// }

// function errorEmitter(): never {
//   while(true) {}
// }

// 后面跟着类型注解
function add({ first, second }: { first: number; second: number }): number {
  return first + second
}

function getNumber({ first }: { first: number }) {
  return first
}

const total = add({ first: 1, second: 2 })
const count = getNumber({ first: 1 })
