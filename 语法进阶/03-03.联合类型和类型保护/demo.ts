// 联合类型会提示共有的方法
// 类型保护可以通过断言的方式，成功了以后再继续往下执行
interface Bird {
  fly: boolean
  sing: () => {}
}

interface Dog {
  fly: boolean
  bark: () => {}
}
// 类型断言的方式
function trainAnial(animal: Bird | Dog) {
  if (animal.fly) {
    ;(animal as Bird).sing()
  } else {
    ;(animal as Dog).bark()
  }
}
// in语法来做类型保护
function trainAnialSecond(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing()
  } else {
    animal.bark()
  }
}
