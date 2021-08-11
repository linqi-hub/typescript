// getter and setter
// 属性做加密处理在暴露给外部，私有属性和get相配合
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ' lee';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person = new Person('dell');
// console.log(person.name);
// person.name = 'dell lee';
// console.log(person.name);

// 单例模式，永远只能生成一个实例
class Demo {
  //存储实例
  private static instance: Demo

  // 通过private和getter
  private constructor(public name: string) {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('dell lee')
    }
    return this.instance
  }
}
// demo1是创建过程，demo2已经存在，直接使用，二者使用的是相同的对象。
const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
console.log(demo1.name)
console.log(demo2.name)
