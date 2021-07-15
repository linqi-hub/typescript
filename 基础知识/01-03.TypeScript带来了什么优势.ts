interface Point { x: number, y: number }

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });

// 编写过程中会提示错误
// 相对于js编辑器会给更好的提示
// 代码语义更加清晰易懂