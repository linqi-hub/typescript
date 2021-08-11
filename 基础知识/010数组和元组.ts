// 数组
const arr: (number | string)[] = [1, '2', 3]
const stringArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined]

// type alias 类型别名
type User = { name: string; age: number }

class Teacher {
  name: string
  age: number
}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 28,
  },
]

// 元组 tuple
// 将类型固定，给约束住，长度和类型都是固定的就可以是元组
const teacherInfo: [string, string, number] = ['Dell', 'male', 18]
// csv，表格
const teacherList: [string, string, number][] = [
  ['dell', 'male', 19],
  ['sun', 'female', 26],
  ['jeny', 'female', 38],
]
