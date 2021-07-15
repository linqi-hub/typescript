// type annotation 类型注解, 我们来告诉 TS 变量是什么类型
// type inference 类型推断, TS 会自动的去尝试分析变量的类型
// 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

// let count: number;
// count = 123;

// let countInference = 123;

// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber;
// TS就是让每个变量都有类型，推断不出来就需要加类型注解

function getTotal2(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber
}

const total = getTotal2(1, 2)

const obj = {
  name: 'dell',
  age: 18,
}
