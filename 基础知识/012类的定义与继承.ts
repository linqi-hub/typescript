class Person {
  name = 'dell'
  getName() {
    return this.name
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher'
  }
  // 子类覆盖父类的方法后，还想使用父类的方法，则使用super调用父类的方法
  getName() {
    return super.getName() + 'lee'
  }
}

const teacher = new Teacher()
console.log(teacher.getName())
console.log(teacher.getTeacherName())
