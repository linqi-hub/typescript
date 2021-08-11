// 模块化思想，都放到home里面，使用时要通过home进行调用
// 需要使用的通过export暴露
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is Header'
      document.body.appendChild(elem)
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is Content'
      document.body.appendChild(elem)
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is Footer'
      document.body.appendChild(elem)
    }
  }

  export class Page {
    constructor() {
      new Header()
      new Content()
      new Footer()
    }
  }
}
