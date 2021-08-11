// interface 和 type 相类似，但并不完全一致
// 接口是帮我们校验的一个工具
// 通用的类型就可以用interface写出来
interface Person {
  // readonly name: string;     只读不写
  name: string
  age?: number
  [propName: string]: any
  say(): string
}

// 接口可以继承
interface Teacher extends Person {
  teach(): string
}

interface SayHi {
  (word: string): string
}

const getPersonName = (person: Person): void => {
  console.log(person.name)
}

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name
}

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello'
  },
  teach() {
    return 'teach'
  },
}

getPersonName(person)
setPersonName(person, 'lee')

class User implements Person {
  name = 'dell'
  say() {
    return 'hello'
  }
}

const say: SayHi = (word: string) => {
  return word
}
