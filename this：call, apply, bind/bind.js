// 使用 apply 方法調用 fn 函數，並確保 this 指向 family，並以陣列[3, 4] 傳入參數。

// node bind.js

let family = {
  num1: 1,
  num2: 2
}

function fn(...array) {
  console.log(this, array);
  this.num1 = array[0]
  this.num2 = array[1]
  console.log(this)
}

// simple call
// fn(family, 3, 4)

// 使用call 傳入自己的this
let a = fn.bind(family, 3, 4)

a()
// 查看fn 是否有改變family當中的值
console.log(family)
